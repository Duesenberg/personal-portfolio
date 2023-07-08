import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style/style.scss';
import './style/style-mobile.scss';
import './style/style-tablet.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
