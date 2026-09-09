# DESIGN.md - GoAutos

Sitio: renta ejecutiva de autos + importación desde subastas EE.UU. en La Ceiba, Honduras.
Fuente del diseño: `index.txt` (export del diseño original).

## Paleta (Material 3 / tonal)

| Token | Hex | Uso |
| --- | --- | --- |
| `primary` | `#000000` | Bordes fuertes, logo, iconos |
| `on-primary` | `#ffffff` | Texto sobre primary |
| `primary-container` | `#131b2e` | Footer, fondo oscuro |
| `on-primary-container` | `#7c839b` | Texto sobre primary-container |
| `secondary` | `#a73a00` | Accent principal, CTAs, hover |
| `on-secondary` | `#ffffff` | Texto sobre secondary |
| `secondary-container` | `#fd651e` | Orange vivo, botón WhatsApp |
| `on-secondary-container` | `#571a00` | Texto sobre secondary-container |
| `background` | `#f8f9ff` | Fondo general (casi blanco frío) |
| `surface` | `#f8f9ff` | Igual al fondo |
| `surface-container-lowest` | `#ffffff` | Cards, navbar |
| `surface-container-low` | `#eff4ff` | Fondos alternos, chips |
| `surface-container` | `#e5eeff` | Bordes, divisores |
| `surface-container-high` | `#dce9ff` | Footer text color |
| `surface-container-highest` | `#d3e4fe` | Nivel superior |
| `on-surface` | `#0b1c30` | Texto principal |
| `on-surface-variant` | `#45464d` | Texto secundario |
| `outline` | `#76777d` | Texto tenue, iconos |
| `outline-variant` | `#c6c6cd` | Divisores tenues |

Regla de contraste: sobre `secondary-container` (#fd651e) solo texto blanco o `on-secondary-container` oscuro. Sobre `primary` (#000) solo blanco.

## Tipografía

Familia única: **Plus Jakarta Sans** (400-800). Icons del original eran Material Symbols; usaremos **Huge Icons**.

| Token | Tamaño/LH | Letter-spacing | Peso |
| --- | --- | --- | --- |
| `display-hero` (desktop) | 56/64 | -0.03em | 800 |
| `display-hero-mobile` | 36/44 | -0.02em | 800 |
| `headline-xl` (desktop) | 40/48 | -0.02em | 700 |
| `headline-xl-mobile` | 28/36 | -0.01em | 700 |
| `headline-lg` | 28/36 | -0.015em | 700 |
| `headline-md` | 22/30 | -0.01em | 600 |
| `headline-sm` | 18/26 | -0.005em | 600 |
| `body-lg` | 18/28 | 0 | 400 |
| `body-md` | 15/24 | 0 | 400 |
| `body-sm` | 13/20 | 0.005em | 400 |
| `label-md` | 14/20 | 0.01em | 600 |
| `label-sm` | 12/16 | 0.02em | 600 |
| `caption` | 11/14 | 0.03em | 500 |

Headlines usan `tracking-tight` + `font-extrabold`/`font-bold`. Eyebrows: `caption`-like, uppercase, `tracking-wider`, color secondary.

## Espaciado

- `space-2xs` 0.25rem · `space-xs` 0.5rem · `space-sm` 0.75rem · `space-md` 1rem · `space-lg` 1.5rem · `space-xl` 2rem · `space-2xl` 3rem · `space-3xl` 4.5rem · `space-4xl` 6rem
- `gutter` 1.5rem (padding lateral), `container-max` 1280px
- Headers: `h-20` (80px)

## Bordes y radios

- `rounded-full` (pill) para botones, chips, avatares, campos de búsqueda
- `rounded-lg` (0.5rem) para cards de flota
- `rounded-2xl` (1rem) para testimonios, requisitos, mapas
- `rounded-3xl` (1.5rem) para bloques grandes (promo, contacto)

## Sombras

- Navbar: `0 1px 8px rgba(0,0,0,0.04)`
- Cards: `shadow-sm`, hover `shadow-md`
- Bloque promo: `shadow-lg`

## Componentes (del diseño original)

1. **Header**: fixed, `backdrop-blur`, fondo `surface-container-lowest/90`. Logo + "GoAutos" primary + ".hn" secondary. Nav (Renta/Importación/Ubicación). CTA pill WhatsApp.
2. **Hero**: badge ubicación pill, H1 display-hero, subtexto, search bar pill 4 campos (Servicio/Marca/Modelo/Presupuesto) + botón lupa, imagen auto con `drop-shadow`, badges tranquilidad (Sin tarjeta / CAI / Aeropuerto & Ferry).
3. **Flota**: eyebrow + título + descripción. Grid 3 cols de cards: categoría (uppercase), precio con centavos (.00 / Por Día), imagen, modelo "o similar", botón Reservar. 1 card de "¿Necesitas más información?" + teléfono.
4. **Promo**: bloque `secondary` con badge, headline, botón pill blanco con texto secondary.
5. **Requisitos**: 3 pasos con ícono en cuadrado `primary xl`, texto numérico.
6. **Importación "Cómo Funciona"**: 4 pasos con número + círculo + ícono, línea punteada conectora, CTA "Cotizar Vehículo de Subasta".
7. **Testimonios**: 3 cards, 5 estrellas secondary, avatar round, nombre + ciudad. Botones prev/next.
8. **Contacto**: split left texto + botones (Maps pill primary, Teléfono pill claro) / right mapa.
9. **Footer**: `primary-container`, links hover `surface-bright`, copyright CAI.

## Patrones de interacción

- Botones: pill, `rounded-full`, hover cambia de outline a filled (o primary a secondary).
- Hover en cards: `shadow-sm` -> `shadow-md`, `transition-all duration-300`.
- Links nav: texto on-surface -> hover secondary (`transition-colors`).
- Footer links: hover `surface-bright`.

## Datos de contacto (constantes del negocio)

- WhatsApp / Tel: +504 8961-1945 (`https://wa.me/50489611945`)
- Ubicación: Plaza Sicilian, Boulevard 15 de Septiembre, La Ceiba, Honduras
- Maps: `https://maps.google.com/?q=Plaza+Sicilian+La+Ceiba+Honduras`
- Promo: 3 días renta + 4º día gratis
- Flota: Compact $48.99, Luxury Compact $58.99, Sedan $54.99, Luxury Sedan $69.99, Luxury+ Sedan $79.99 (por día)