# Kcor Theme

This theme for BigCommerce is a Next.js application that uses TailwindCSS for styling. It is designed to be a starting point for creating a custom theme for BigCommerce.

This theme is made up of:

- [TypeScript](https://www.typescriptlang.org/) - A typed superset of JavaScript for an improved developer experience
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Next.js](https://nextjs.org/) - React enhanced with server-side rendering and routing
- [TailwindCSS](https://tailwindcss.com/) - Friendly utility classes for styling
- [shadcn/ui](https://ui.shadcn.com/) - A collection of accessible and customizable UI components
- [Radix Primitives](https://www.radix-ui.com/primitives) - A collection of low-level UI primitives (used by `@shadcn/ui`)
- [Embla Carousel](https://www.embla-carousel.com/) - A modern carousel library (used by `@shadcn/ui`)
- [BigCommerce](https://www.bigcommerce.com/) - The e-commerce platform used to power the theme
- [Strapi](https://strapi.io/) - The headless CMS used to manage content

Other libraries not mentioned are used to enhance the developer experience and are not directly related to the theme. If you add a new library to the theme, make sure to add it to the list above.

## Appendix

- [Kcor Theme](#kcor-theme)
  - [Appendix](#appendix)
  - [Getting Started](#getting-started)
    - [Install Dependencies](#install-dependencies)
    - [Start the Development Server](#start-the-development-server)
  - [Project Structure](#project-structure)
  - [Modifying the Theme](#modifying-the-theme)
    - [How Do I Change the Theme Colors?](#how-do-i-change-the-theme-colors)
    - [How Do I Add New Theme Colors?](#how-do-i-add-new-theme-colors)
    - [What Colors Do I Use For My Component?](#what-colors-do-i-use-for-my-component)
    - [Are There Any Existing Components I Can Use?](#are-there-any-existing-components-i-can-use)
    - [How Do I Install Local Fonts?](#how-do-i-install-local-fonts)
    - [How Do I Install Google Fonts?](#how-do-i-install-google-fonts)

## Getting Started

To get started modifying the theme, you will need to install the dependencies and start the development server.

### Install Dependencies

To install the dependencies, you can use `yarn` to install the dependencies. If you don't have `yarn` installed, you can install it by running the following command:

```bash
npm install -g yarn
```

Then, you can install the dependencies by running the following command:

```bash
yarn install
```

### Start the Development Server

To start the development server, you can run the following command:

```bash
yarn dev
```

## Project Structure

For a more in-depth look at the project structure, check out the [Next.js documentation](https://nextjs.org/docs/getting-started/project-structured).

```bash
@/
├── app/                # Application files
│   ├── global.css      # Global CSS and theme colors
│   └── ...             # File-based routing, layout, and other app files
├── components/
│   ├── ui/             # Reusable UI components
│   └── ...             # Single-use components
├── fonts/              # Local font files
├── lib/                # Core/utility functions
├── public/             # Public files (images, etc.)
├── tailwind.config.js  # TailwindCSS configuration
└── package.json        # Project manifest
```

## Modifying the Theme

### How Do I Change the Theme Colors?

Check out [the official shadcn/ui documentation](https://ui.shadcn.com/docs/theming#css-variables) if you need more information.

The `@/app/global.css` file contains the theme colors. You can modify the HLS colors to change the theme colors. Use [this color code picker](https://hslpicker.com/) to find the colors you want to use.

There are two main colors for components: `background` and `foreground`. The `background` color is used for the background of components, and the `foreground` color is used for the text and icons inside components. (Note: Usually `-background` is omitted, check out the `@/app/global.css` for examples)

```css
@layer base {
  :root {
    --background: 0 0% 100%; /* colors MUST be hsl values */
    --foreground: 0 0% 3.9%; /* colors MUST be hsl values */
  }
  /* ... */
}
```

### How Do I Add New Theme Colors?

Check out [the official shadcn/ui documentation](https://ui.shadcn.com/docs/theming#adding-new-colors) if you need more information.

You can add new theme colors by first adding new CSS variables to the `@/app/global.css` file. You can then use these variables in the `@/tailwind.config.js` file to add new colors to the theme.

Variables start with the name of the component using the colors. For example, if you want to add new colors for a component called `my-component`, you would add the following CSS variables:

```css
@layer base {
  :root {
    /* ... */
    --my-component: 0 0% 100%; /* background color */
    --my-component-foreground: 0 0% 3.9%; /* text color */
    /* ... */
  }
}
```

Then, you can add the new colors to the `@/tailwind.config.js` file:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        /* ... */
        component: {
          DEFAULT: 'hsl(var(--my-component))'
          foreground: 'hsl(var(--my-component-foreground))',
        },
      },
    },
  },
};
```

You can then use the new colors in a component like so:

```tsx
export default function MyComponent() {
  return (
    <div className="bg-component text-component-foreground">{/* ... */}</div>
  );
}
```

### What Colors Do I Use For My Component?

Check out [the official shadcn/ui documentation](https://ui.shadcn.com/docs/components/accordion) for a list of what components exist for you to use.

### Are There Any Existing Components I Can Use?

Look through the `@/components/ui` directory to see if there are any existing components that match what you need.

If not, check out [the official shadcn/ui documentation](https://ui.shadcn.com/docs/components) for a list of existing components you can use.

Once you find a component from `shadcn/ui` that you want to use, install it using the following command:

```bash
npx shadcn-ui@latest add <component-name>
```

This installs a component to `@/components/ui/<component-name>` and adds the necessary CSS to `@/app/global.css`.

You can then use the component in your application like so:

```ts
import { ComponentName } from '@shadcn/ui/<component-name>';

export default function MyComponent() {
  return <ComponentName />;
}
```

If you can't find a component you need, you will need to create it manually.

### How Do I Install Local Fonts?

Check out [the official Next.js documentaion](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) if you need more information.

Make sure to install `@next/font` if it's not already installed (check `@/package.json`):

```bash
yarn add @next/font
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

### How Do I Install Google Fonts?

Check out [the official Next.js documentaion](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) if you need more information.

Make sure to install `@next/font` if it's not already installed (check `@/package.json`):

```bash
yarn add @next/font
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
