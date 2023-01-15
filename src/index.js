import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Ex1 from './Ex1';
import EX2 from './Ex2';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*<App />*/}
    {/*<Ex1/>*/}
    <EX2></EX2>
  </React.StrictMode>
);
reportWebVitals();
