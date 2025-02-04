# ReactJS Web App Template

A **ReactJS** boilerplate designed for rapid SaaS product development. This template integrates essential tools and libraries to streamline the setup process, letting you focus on building features.

## Features

- **ReactJS**: Fast, component-based UI development.
- **React Context API**: Simplified state management across components.
- **React Router (BrowserRouter)**: Efficient client-side routing.
- **Firebase Authentication**:
  - Create new users
  - User login
  - User logout
  - Browser persistence for session management
- **Navigate**: Simplified programmatic routing.
- **Reusable Components**: Modular, easy-to-extend components for faster development.
- **Loading Splash Screen**: Loading state which updates when firebase auth user logged in check done.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** (v14 or above)
- **npm** or **yarn**

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/DevTomUK/tomsAppTemplate.git
   cd tomsAppTemplate
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

## Project Structure

```
src/
├── components/      # Reusable UI components
├── context/        # React Contexts for global state management
├── api/        # Firebase configuration and authentication logic
├── routes/           # Route-based pages
├── App.jsx           # Main application component     
└── main.jsx         # Application entry point
```

## Available Scripts

In the project directory, you can run:

- **`npm run dev`**: Runs the app in development mode - default is [http://localhost:5173](http://localhost:5173).
- **`npm run build`**: Builds the app for production.

## Customization

- Add new components to the `components/` directory.
- Manage global state using the Context API in `contexts/`.
- Configure routes in `routes.js`.
- Extend authentication and other logic in the `firebase/` directory.
- Personalise the Routes and Splash Screen

## License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.
