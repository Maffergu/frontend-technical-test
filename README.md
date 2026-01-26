# Prueba Técnica: Desarrollador de Prototipos de Producto (Front-End)

**Tiempo sugerido:** 3 - 4 horas
**Stack:** React, Tailwind CSS, TypeScript

---

## 1. Contexto

En **La Neta (Elevn)**, estamos construyendo el ecosistema definitivo para creadores. La primera impresión es crucial: necesitamos que el flujo de registro sea suave, visualmente impactante y extremadamente fácil de usar en móviles.

Tu misión es implementar el **"Creator Setup Wizard"** (Asistente de Configuración), transformando nuestros diseños estáticos en una experiencia web funcional y responsiva.

---

## 2. El Reto

Debes construir un **prototipo funcional** del flujo de onboarding basado en los diseños adjuntos. El flujo consta de **3 pasos principales** dentro de un "Wizard" o formulario multipaso.

### Referencia Visual

Usa las imágenes adjuntas en este repositorio (carpeta `/design`) como tu guía de verdad para la UI:

**Referencia Principal:** [Figma - Desarrollador de Prototipos de Producto Front-End 2026](https://www.figma.com/design/BpXNeYzvVQyhEshSdIKMrt/Desarrollador-de-Prototipos-de-Producto-Front---End-2026?node-id=0-40222&t=ytEKJ2EYEzUZfUBv-1)

### Requerimientos Funcionales por Pantalla

#### Paso 1: "Tell us about you" (Información Personal)
- Formulario con: **Nombre**, **Apellido** y **País**.
- **Validación:** Todos los campos son obligatorios.
- **UI:** El botón "Next" debe estar deshabilitado hasta que el formulario sea válido.

#### Paso 2: "Select your niche" (Selección de Categorías)
- Grid de categorías interactivo (Beauty, Food, Gaming, etc.).
- **Interacción:** El usuario puede seleccionar múltiples categorías.
- **Lógica:** Debe haber un contador visual (ej. "3 categories selected").
- **Estado:** Las tarjetas deben cambiar de estilo (borde/color) al ser seleccionadas.

#### Paso 3: "Connect Socials" (Conexión de Redes)
- Pantalla para conectar Instagram o TikTok (elige una para el ejemplo).
- **Feature Clave:** Implementar el toggle/acordeón de "Manual Verification" que se ve en el diseño.
- Si el usuario hace clic en "Manual Verification", se deben desplegar los inputs (Username, Followers) **sin recargar la página**.

---

## 3. Requerimientos Técnicos (Stack)

Para esta prueba, es **obligatorio** apegarse a nuestro stack tecnológico:

| Tecnología | Requerimiento |
|------------|---------------|
| **Framework** | React 18 + Vite |
| **Lenguaje** | TypeScript (Tipado estático es mandatorio) |
| **Estilos** | Tailwind CSS (Mobile-First) |
| **Iconos** | Lucide React (o similares) |
| **Componentes** | Puedes usar shadcn/ui para acelerar (botones, inputs) o crear los tuyos propios con Tailwind |
| **Formularios** | Gestión de estado limpia (React Hook Form + Zod es un plus, pero un `useState` bien manejado es aceptable) |

> **Nota:** No uses CSS puro ni Styled Components. Queremos ver tu dominio de las clases de utilidad de Tailwind.

### 🤖 Uso de Inteligencia Artificial

En La Neta, **abrazamos la IA**. Eres libre de usar herramientas como ChatGPT, Claude, v0.dev o GitHub Copilot para generar estructuras, estilos o lógica.

**Condición:** Debes incluir un archivo `AI_LOG.md` explicando brevemente qué prompts usaste o en qué partes te apoyaste en la IA.

---

## 4. Criterios de Evaluación

No buscamos un backend real. Buscamos **calidad de frontend**. Evaluaremos:

| Área | Peso | Qué buscamos |
|------|------|--------------|
| **Fidelidad Visual** | 40% | ¿Se parece al diseño? ¿Es responsive (se ve bien en celular)? ¿Cuidaste los espacios y tipografías? |
| **Código & Arquitectura** | 30% | Código limpio, componentes reutilizables, uso correcto de TypeScript (evitar `any`). |
| **Interacción** | 20% | Transiciones suaves entre pasos, validaciones claras, estados de hover/active. |
| **Velocidad/AI** | 10% | Uso eficiente de herramientas para entregar rápido sin sacrificar calidad. |

---

## 5. Entregables

1. **Código Fuente:** La URL de tu repositorio (GitHub/GitLab).
2. **Demo en Vivo (Deploy):** Despliega tu proyecto en **Vercel** o **Netlify**.
   > Esto es vital: Queremos probarlo directamente en nuestros teléfonos.
3. **AI Log:** Tu archivo `AI_LOG.md`.

### ¿Cómo entregar?

Por favor, responde al correo de reclutamiento con los enlaces a tu **Repo** y a tu **Demo**.

---

## Quick Start

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build para producción
npm run build
```

## Estructura del Proyecto

```
src/
├── assets/             # Imágenes y recursos
├── components/
│   ├── ui/             # Componentes base (Button, Input, Card)
│   └── layout/         # Layout principal
├── pages/
│   ├── Onboarding/
│   │   ├── Step1_Bio.tsx
│   │   ├── Step2_Niche.tsx
│   │   ├── Step3_Socials.tsx
│   │   └── Summary.tsx
│   └── Welcome.tsx
├── lib/
│   └── utils.ts        # Función cn() para clases condicionales
├── App.tsx             # Configuración de rutas
└── main.tsx            # Entry point
```

## Rutas Disponibles

| Ruta | Componente |
|------|------------|
| `/` | Welcome |
| `/onboarding/bio` | Step1_Bio |
| `/onboarding/niche` | Step2_Niche |
| `/onboarding/socials` | Step3_Socials |
| `/onboarding/summary` | Summary |

---

**¡Mucho éxito! Esperamos ver tu creatividad en acción.** 🚀
