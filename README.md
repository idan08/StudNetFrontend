# StudNetFrontend

StudNetFrontend is the client-side application for the StudNet project. This platform allows users to register, log in, and watch educational videos in the field of computer science. It is built using React and Vite to offer a modern, fast, and smooth user experience.

## Project Structure

### Client-Side (React)
The client-side of the project is built using React. Below is an outline of the main folders and files:

- **/assets**: This folder contains all static assets like images and videos that are used throughout the application.
- **/src/components**: Contains reusable React components that are used across multiple pages (e.g., buttons, input fields, headers, etc.).
- **/src/services**: Holds functions for API requests to interact with the backend (server-side) for operations like registration, login, and video fetching.
- **/src/pages**: Contains the different pages of the application, including login, registration, and the page displaying videos.
- **App.jsx**: The main React component where routes are defined and the app is rendered.
- **main.jsx**: The entry point for the React application, where the app is initialized and rendered.

### Example Directory Structure:

## Features

- **User Registration**: Allows new users to create an account.
- **User Login**: Provides authentication and secure login for users.
- **Video Display**: Displays educational videos for users to watch.
- **Responsive Design**: The website is fully responsive and works well on both desktop and mobile devices.

- 
## Getting Started

Ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- A browser (e.g., Chrome, Firefox, Safari)

## Clone the repository from GitHub:

git clone https://github.com/yourusername/StudNetFrontend.git
Navigate into the project directory:

- **1**. Then, install the project dependencies using npm:**npm install**
- **2**. Start the development server by running: **npm run dev**

This will start the development server and open the application in your browser at http://localhost:5173. You should now be able to access the application on your local machine.

## Progject Structher:

/StudNetFrontend
│
├── /assets
│   └── (Images, videos, and other static files)
│   └── This folder contains all the static assets used throughout the application, such as images, videos, icons, and other non-dynamic resources.
│
├── /src
│   ├── /components
│   │   ├── /Button
│   │   │   ├── Button.jsx
│   │   │   ├── Button.module.css
│   │   ├── /Header
│   │   │   ├── Header.jsx
│   │   │   ├── Header.module.css
│   │   └── (other components with similar structure)
│   ├── /services
│   │   └── (API requests and business logic)
│   │   This folder contains functions for handling API requests (e.g., registration, login, video fetching) and other business logic. It serves as an interface between the frontend and backend.
│   ├── /pages
│   │   └── (Pages like login, registration, video display)
│   │   This folder contains the different pages or views in the application, such as login, registration, and video display pages.
│   ├── /styles
│   │   └── (Global styles like SCSS or CSS files)
│   │   Contains global styling files, such as SCSS or CSS, which define the overall layout and design of the app.
│   ├── /utils
│   │   └── (Helper functions or utilities)
│   │   This folder includes utility functions or helper code used throughout the app, such as formatting functions, validation logic, etc.
│   ├── /hooks
│   │   └── (Custom React hooks)
│   │   This folder contains custom hooks, which are reusable pieces of logic in React (e.g., data fetching hooks, form validation hooks).
│   ├── App.jsx
│   └── The main component that defines the application's routes and handles high-level logic.
│   ├── main.jsx
│   └── The entry point for the React app, where the ReactDOM renders the app into the `index.html`.
│
├── /public
│   ├── index.html         # The main HTML template where the React app is injected.
│   ├── favicon.ico        # Favicon for the app.
│   └── (Other public assets like robots.txt or icons)
│   └── The `index.html` file serves as the template for the React application. It contains a root div (`<div id="root"></div>`) where the React app will be rendered.
│
├── /tests
│   └── (Test files for components, services, and other parts of the app)
│   └── This folder is where your test files reside. It can include unit tests for components, API services, and other business logic to ensure the app behaves as expected.
│
├── /node_modules
│   └── (Installed project dependencies)
│   └── This folder is created automatically when you run `npm install` and contains all the external libraries and packages your project depends on.
│
├── .gitignore
│   └── This file tells Git which files and directories to ignore, such as the `node_modules` folder and other temporary files like build outputs.
│
├── package.json
│   └── This file holds metadata about the project, such as the project name, version, and dependencies. It also defines scripts to run the app (e.g., `npm run dev`).
│
├── README.md
│   └── A markdown file containing important documentation about the project, such as installation steps, project details, and usage instructions.
│
├── .env
│   └── This file stores environment variables like API keys or sensitive credentials, keeping them separate from the code.
│
├── .eslintrc.json
│   └── Configuration file for ESLint, a tool that helps maintain consistent coding style and quality by detecting and fixing issues in JavaScript code.
│
├── .prettierrc
│   └── Configuration file for Prettier, a code formatter that ensures the code adheres to a consistent style.
│
├── vite.config.js
│   └── Configuration file for Vite, which is used to set up the development environment and configure build settings for the project.
│
└── LICENSE.md
    └── A file that describes the licensing information for the project, typically specifying the open-source license that applies to the code.

