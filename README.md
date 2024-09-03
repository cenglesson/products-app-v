# Products App

This project is a React application for browsing and managing products.

The application is using the [dummyjson](https://dummyjson.com/) api to view product details, sort, filter and search for specific products by name.

## Features

The interface of the product list with a preview of the product's price, brand, category, name, image and brief description has been implemented.

The products view includes a search bar and options for filtering and sorting, allowing users to easily find and organize products. Additionally, you can favorite products and view them later in the Favorites view.

## Stack

This project utilizes a modern stack of technologies and tools to build and maintain a React application. Here’s an overview of the key components:

- **TypeScript**: A superset of JavaScript that provides static type definitions, helping catch errors early and improve code quality.

- **React**: A popular library for building user interfaces, allowing for the creation of reusable UI components.

- **Ant Design**: A comprehensive design system and UI component library for React that provides a set of high-quality components and design patterns.

- **Vite**: A fast build tool that provides a modern development experience with fast hot module replacement and optimized builds. Vite is used here with TypeScript support via `vite-tsconfig-paths`.

- **Vitest**: A fast and modern test framework for unit and integration tests. It supports TypeScript out-of-the-box and integrates seamlessly with the rest of your stack.

- **Redux**: A predictable state container for JavaScript apps, used here with the `@reduxjs/toolkit` package for easier Redux state management and `react-redux` for connecting Redux with React components.

- **React Router DOM**: A routing library for React that enables navigation and rendering of different components based on the URL.

- **Axios**: A promise-based HTTP client for making requests to your backend or external APIs.

- **Testing Library**: Includes `@testing-library/react` and `@testing-library/jest-dom` for testing React components, providing utilities for rendering components and asserting their behavior.

- **ESLint**: A tool for identifying and fixing problems in JavaScript and TypeScript code, configured with the `react-app` preset for React-specific linting rules.

- **Jest DOM**: Provides custom matchers for asserting on DOM nodes, making it easier to test React components with `@testing-library/react`.

- **JSDOM**: A JavaScript implementation of the DOM used for testing in a simulated browser environment.

### Scripts

- **`npm start`**: Starts the development server using `react-scripts`. Opens the application in development mode at [http://localhost:3000](http://localhost:3000).

- **`npm run build`**: Creates a production build of the application using `react-scripts`, optimizing the output for performance.

- **`npm run test`**: Runs the test suite using Vitest, executing tests and displaying results in the terminal.

- **`npm run test:watch`**: Runs the test suite in watch mode using Vitest, automatically re-running tests on code changes.

- **`npm run eject`**: Ejects the configuration from `react-scripts`, giving you full control over the build configuration (use with caution).

## Development Notes

### Sider Menu

- The Sider (menu) isn't fixed as intended. Initially, when I managed to fix it and set `overflow: hidden;`, it caused issues with the infinite scroll functionality for loading more products. Balancing these two features would require further refinement.

### UI Library Choice

- I chose to use Ant Design (AntD) instead of Material-UI (MUI) components. While MUI is a popular choice, I opted for AntD to ensure I could deliver a working solution within the time constraints. Given that I hadn't worked with MUI before, using it would have taken longer.

### Testing

- I acknowledge that more test files should have been added to the project. Currently, there is only one test file included, but additional tests would improve the reliability and maintainability of the codebase.

