# Next.js Technical Assessment for the Frontend Engineer position at Emergen

## Project Description
This project is a Next.js application developed as a technical assessment for the Frontend Engineer position at Emergen.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Installation

### Install Next.js
To install Next.js, run the following command:

```bash
npx create-next-app@latest
# or
yarn create next-app
# or
pnpm create next-app
```

### Install TailwindCSS
To install TailwindCSS, follow these steps:

1. Install TailwindCSS and its peer dependencies:

    ```bash
    npm install -D tailwindcss postcss autoprefixer
    ```

2. Generate the `tailwind.config.js` and `postcss.config.js` files:

    ```bash
    npx tailwindcss init -p
    ```

3. Add the paths to all of your template files in the `tailwind.config.js` file:

    ```js
    module.exports = {
      content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    }
    ```

4. Add the Tailwind directives to your CSS file (e.g., `styles/globals.css`):

    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

## Live URL
The application is deployed and can be accessed at [emergen-nextjs.vercel.app](https://emergen-nextjs.vercel.app).

## Technologies Used
- Next.js
- TailwindCSS
