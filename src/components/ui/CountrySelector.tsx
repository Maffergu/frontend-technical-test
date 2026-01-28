import React, { useState, useEffect, useRef } from 'react';

// 1. Definimos la estructura del objeto País
export interface Country {
  name: string;
  flag: string;
}

// 2. Definimos las Props: Recibe la lista y una función para devolver el seleccionado
interface CountrySelectorProps {
  countries: Country[];
  onChange: (country: Country) => void;
}

export default function CountrySelector({ countries, onChange }: CountrySelectorProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Cerrar al hacer click fuera del componente
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredCountries = countries.filter((c) =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (country: Country) => {
    setSelectedCountry(country); // Actualiza la UI local
    setIsOpen(false);            // Cierra el menú
    setSearchTerm('');           // Limpia la búsqueda
    onChange(country);           // ¡Aquí es donde "retorna" el país al padre!
  };

  return (
    <div className="relative w-full mx-auto mt-4" ref={dropdownRef}>
      {/* Botón Principal */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-2 rounded-lg text-gray-400  text-sm font-medium  bg-[#1c0d40]  flex items-center justify-between transition-all"
      >
        <div className="flex items-center gap-2">
          {selectedCountry ? (
            <>
              <img src={selectedCountry.flag} alt="" className="w-5" />
              <span>{selectedCountry.name}</span>
            </>
          ) : (
            <span className="text-gray-400 mt-1">Select your country</span>
          )}
        </div>
        <svg 
          className={`w-3 fill-white transition-transform ${isOpen ? 'rotate-180' : ''}`} 
          viewBox="0 0 24 24"
        >
          <path d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z" />
        </svg>
      </button>

      {/* Lista Desplegable */}
      {isOpen && (
        <ul className="absolute w-full mt-2 shadow-xl bg-[#1c0d40]  rounded-md z-[100] max-h-60 overflow-y-auto p-2">
          {filteredCountries.map((country) => (
            <li
              key={country.name}
              onClick={() => handleSelect(country)}
              className="flex items-center gap-3 px-3 py-2 text-sm text-gray-400  hover:bg-blue-50 hover:text-blue-700 rounded cursor-pointer transition-colors"
            >
              <img src={country.flag} alt="" className="w-5" />
              {country.name}
            </li>
          ))}

          
        </ul>
      )}
    </div>
  );
}