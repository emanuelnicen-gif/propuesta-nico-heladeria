# Propuesta · Acompañamiento estratégico de marca · Heladería Nico

Landing page de propuesta comercial freelance, diseñada para presentar un servicio de acompañamiento estratégico en la construcción y lanzamiento de marca de una heladería en Ricardone, Santa Fe.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** (paleta personalizada: crema, chocolate, pistacho)
- **Framer Motion** (animaciones scroll-triggered)
- **lucide-react** (íconos)

## Correr localmente

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000)

## Build para producción

```bash
npm run build
npm start
```

## Deploy en Vercel

1. Subir el repositorio a GitHub
2. Ir a [vercel.com](https://vercel.com) → New Project
3. Importar el repositorio
4. Dejar toda la configuración por defecto (Vercel detecta Next.js automáticamente)
5. Deploy

No hace falta configurar variables de entorno.

## Estructura de archivos

```
src/
├── app/
│   ├── layout.tsx        # Metadata, fuentes, globals
│   ├── page.tsx          # Composición de secciones
│   └── globals.css       # Estilos base + Tailwind
├── components/
│   ├── ui/
│   │   └── SectionLabel.tsx
│   ├── FadeIn.tsx        # Animación reutilizable (scroll-triggered)
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Context.tsx
│   ├── MyRole.tsx
│   ├── Problems.tsx
│   ├── WhatIncludes.tsx
│   ├── Process.tsx
│   ├── WhatNotIncludes.tsx
│   ├── Pricing.tsx
│   ├── WhySense.tsx
│   ├── Closing.tsx
│   └── Footer.tsx
└── data/
    └── content.ts        # Todo el contenido editable centralizado
```

## Personalización

Todo el contenido está centralizado en `src/data/content.ts`. Para actualizar precios, textos, entregables o proceso, editá ese archivo sin tocar los componentes.

La paleta de colores se configura en `tailwind.config.ts`.

## Contacto

Para agregar el link de WhatsApp real, buscá `https://wa.me/` en `src/components/Closing.tsx` y reemplazá con el número completo: `https://wa.me/549XXXXXXXXXX`
