import './index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <Router>
    <StrictMode>
      <App />
    </StrictMode>
  </Router>
);