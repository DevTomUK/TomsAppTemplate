import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';  // Make sure to import BrowserRouter
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter> {/* Wrap your entire app in BrowserRouter */}
    <App />
  </BrowserRouter>
);
