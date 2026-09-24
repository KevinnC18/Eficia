# Eficia — Landing page

Landing page corporativa para **Eficia**, consultoría independiente de ahorro en facturas de luz y gas en España. El sitio presenta la propuesta de valor, beneficios, proceso de trabajo y un formulario de contacto para solicitar una auditoría energética gratuita.

Proyecto desarrollado con **React 19**, **TypeScript** y **Vite 8**, siguiendo un diseño de referencia en Figma (estructura por secciones, tipografía y paleta de marca).

## Características

- **Header** sticky con logo, navegación por anclas y botón de menú móvil (icono preparado; lógica de apertura pendiente).
- **Hero** con titular, subtítulo, imagen optimizada en tamaño y dos CTAs hacia contacto y “Cómo funciona”.
- **Cinco secciones** de contenido separadas por divisores visuales.
- **Formulario de contacto** con validación en cliente: el botón *Enviar* solo se habilita cuando están completos los campos obligatorios y la aceptación de privacidad.
- **Diseño responsive** para escritorio, tablet y móvil (breakpoints principalmente en 768px y 1024px).
- **Iconografía** con [react-icons](https://react-icons.github.io/react-icons/) (canales de contacto y menú hamburguesa).

## Secciones de la página

| Orden | Componente | Ancla | Contenido |
| ----- | ---------- | ----- | --------- |
| — | `Header` | — | Logo, nav: Cómo funciona, Beneficios, Contacto |
| — | `Hero` | — | Propuesta principal + imagen + CTAs |
| 1 | `Section1Beneficios` | `#beneficios` | Título + 3 tarjetas (problemas del mercado energético) |
| 2 | `Section2SobreNosotros` | `#sobre-nosotros` | Texto + grid 2×2 de estadísticas |
| 3 | `Section3BeneficiosAmpliados` | — | Título, subtítulo + 6 tarjetas de confianza |
| 4 | `Section4ComoFunciona` | `#como-funciona` | Título + 3 pasos del proceso |
| 5 | `Section5Contacto` | `#contacto` | Canales, horarios y formulario |
| — | `Footer` | `#footer-legal` | Logo, enlaces útiles e información legal |

## Estructura del repositorio

```
Eficia/
├── public/
│   └── icons.svg
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── SectionDivider.tsx
│   │   └── sections/
│   │       ├── Hero.tsx
│   │       ├── Section1Beneficios.tsx
│   │       ├── Section2SobreNosotros.tsx
│   │       ├── Section3BeneficiosAmpliados.tsx
│   │       ├── Section4ComoFunciona.tsx
│   │       └── Section5Contacto.tsx
│   ├── styles/
│   │   └── landing.css      # Estilos de layout, header, hero, stats, contacto, footer
│   ├── App.tsx              # Composición de la landing
│   ├── index.css            # Variables CSS globales y tipografía base
│   └── main.tsx
├── index.html
├── package.json
├── vite.config.ts
└── tsconfig*.json
```

## Stack técnico

| Área | Tecnología |
| ---- | ---------- |
| UI | React 19 |
| Lenguaje | TypeScript |
| Bundler / dev server | Vite 8 |
| Estilos | CSS modular por archivo (`index.css` + `landing.css`) |
| Iconos | react-icons |
| Lint | ESLint 10 + typescript-eslint |

## Variables de diseño

Definidas en `src/index.css`:

- **Marca:** `--color-primary`, `--color-secondary`, `--color-accent`, `--color-accent-secondary`
- **Superficies:** `--color-bg`, `--color-bg-secondary`, `--color-footer-bg`
- **Texto y bordes:** `--color-text`, `--color-text-secondary`, `--color-border`
- **Tipografía:** Inter (cuerpo), Plus Jakarta Sans (titulares), cargadas desde Google Fonts en `index.html`

Los campos del formulario usan `--color-bg-secondary` como fondo de escritura, coherente con las secciones Hero, contacto y footer.

## Formulario de contacto

Campos **obligatorios** para habilitar *Enviar*:

- Nombre completo  
- Teléfono  
- Tipo de cliente (select)  
- Correo electrónico  
- Aceptación de política de privacidad  

El **mensaje** es opcional. La lógica vive en `Section5Contacto.tsx` (`canSubmit` + estado controlado). El `handleSubmit` está preparado para conectar un backend o servicio de email.

## Requisitos

- [Node.js](https://nodejs.org/) 20+ recomendado  
- npm (incluido con Node)

## Instalación y scripts

```bash
# Clonar el repositorio e instalar dependencias
npm install

# Servidor de desarrollo (http://localhost:5173)
npm run dev

# Compilación de producción (salida en dist/)
npm run build

# Vista previa del build
npm run preview

# Linter
npm run lint
```

## Responsive

- **Escritorio:** grids de hero, estadísticas, tarjetas y contacto en varias columnas.  
- **Tablet (≤1024px):** apilado de hero y contacto; tarjetas en 2 columnas donde aplica.  
- **Móvil (≤768px):** navegación del header oculta; visible el botón de menú; stats y tarjetas en una columna.

Estilos responsive concentrados en `src/styles/landing.css`.


## Licencia

Proyecto privado (`"private": true` en `package.json`). Creado por: [@KevinC18](https://github.com/KevinnC18)
