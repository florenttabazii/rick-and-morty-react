
# Rick and Morty Characters by Florent Abazi

A web application to browse characters from the *Rick and Morty* universe. The project demonstrates the use of modern web development tools and libraries, focusing on performance, scalability, and a smooth user experience.

---

## Features

- **React.js + Vite + TypeScript**: A fast and efficient setup for scalable front-end development.
- **GraphQL with Apollo**: Efficiently fetch and manage data from the Rick and Morty API.
- **Material-UI**: Modern UI components for a polished and responsive design.
- **Infinite Scrolling**: Seamless browsing experience with automatic data loading as you scroll.
- **i18n (Internationalization)**: Multi-language support for global accessibility.
- **Filters and Sorting**: Easy filtering and sorting of characters based on status, species, and origin.

---

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (version 16 or higher recommended)
- npm or yarn

### Steps

1. Clone the repository:

   git clone https://github.com/florenttabazii
   cd rick-and-morty

2. Install dependencies:

   - npm install

   - npm install graphql @apollo/client

   - npm install @mui/material

   - npm install @mui/icons-material
   
   - npm install react-infinite-scroll-component
   
   - npm install react-i18next i18next



3. Start the development server:

   - npm run dev

4. Open your browser and visit [http://localhost:5173].

---

## Project Structure

```
rick-and-morty/
├── src/
│   ├── components/    # Reusable React components (CharacterGrid, Filters, Footer, etc.)
│   ├── assets/        # Static assets (e.g., images, logos)
│   ├── graphql/       # GraphQL queries and mutations
│   ├── i18n/          # Internationalization configurations
│   ├── App.tsx        # Main application component
│   └── index.tsx      # Entry point for React
├── public/            # Public files (e.g., favicon, index.html)
├── package.json       # Project dependencies and scripts
└── README.md          # Documentation
```

---

## Technologies Used

- **React.js**: For building the user interface.
- **Vite**: A fast build tool for modern web projects.
- **TypeScript**: Adds static typing for better code quality and maintainability.
- **GraphQL**: API query language for efficient data fetching.
- **Apollo Client**: Manage GraphQL queries and cache.
- **Material-UI**: Provides a customizable component library for React.
- **Infinite Scroll Component**: For automatic data loading as users scroll.
- **i18n**: Enables multi-language support.

---

## Available Scripts

- **`npm run dev`**: Starts the development server.
- **`npm dedupe`**: Deduplicates versions of dependencies.

---

## Demo

You can explore the live version of this project here: www.florent-abazi.dev .

---

## Contributions

Contributions, issues, and feature requests are welcome!

1. Fork this repository.
2. Create a new branch: `git checkout -b feature/your-feature`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/your-feature`.
5. Submit a pull request.

---

## Acknowledgments

- Special thanks to the [Rick and Morty API](https://rickandmortyapi.com/) for providing the data.
- Inspiration for the design and implementation comes from a task given by company Pabau.

---

### Author

**Florent Abazi**  
Software Engineer passionate about learning and growing in web development.

---
