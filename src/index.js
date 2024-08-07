import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './index.css';
import App from './App';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import reportWebVitals from './reportWebVitals';
import { APIContextFunction } from './Components/Context/APIContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <APIContextFunction>
    <App />

    </APIContextFunction>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
