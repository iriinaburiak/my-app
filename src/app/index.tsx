import React from 'react';
import ReactDOM from 'react-dom/client';
import { container } from '../core/auth/di/container';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
