# Kcor Theme

## Altering the Theme

Here are some guides to help you alter the theme.

### Changing the default color scheme

### Changing the Default Font Family

For a full guide to changing fonts in Next.js, check out [the official documentaion](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) for changing font families. If you want a shorter guide, below are some quick rundowns to help you get started.

#### Use the default TailwindCSS font families

To use the default TailwindCSS font families, you can simply use the below configuration or remove the `fontFamily` property from the `extend` object.

```js
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: [...fontFamily.sans],
        serif: [...fontFamily.serif],
      },
    },
  },
  // ...
};
```

#### Use custom local font families

Make sure to install `@next/font` if it's not already installed (check `@/package.json`):

```bash
pnpm add @next/font
```

Then, download the font files you want to use and place them in the `@/fonts` directory. You will then need to import `next/font/local` as well as the font file inside the `@/app/layout.tsx` (or another layout) file.

```tsx
import localFont from 'next/font/local';

// Setup the local font for use in the theme
const myFont = localFont({
  src: './fonts/my-font.woff2',
  display: 'swap',
  variable: '--font-my-font',
});

// Then add the font variable to the root layout file in the html tag
export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={myFont.variable}>
      {/* ... */}
    </html>
  );
}
```

Then, you can use the font variable in the `@/tailwind.config.js` file:

```js
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-my-font)', ...fontFamily.sans], // must match the variable name from the layout file
      },
    },
  },
  // ...
};
```

#### Use Google Fonts

Make sure to install `@next/font` if it's not already installed (check `@/package.json`):

```bash
pnpm add @next/font
```

Then, find some Google fonts to use and import them from `next/font/google` inside the `@/app/layout.tsx` (or another layout) file, like so:

```tsx
import { Inter } from 'next/font/google';

// Setup the Google font for use in the theme
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

// Then add the font variable to the root layout file in the html tag
export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      {/* ... */}
    </html>
  );
}
```

Then, you can use the font variable in the `@/tailwind.config.js` file:

```js
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans], // must match the variable name from the layout file
      },
    },
  },
  // ...
};
```
