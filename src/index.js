import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

// Create the root React rendering target from the HTML element with id="root"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // StrictMode helps highlight potential problems in development
  <React.StrictMode>
    {/* Enable client-side routing (no full page reloads) */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
