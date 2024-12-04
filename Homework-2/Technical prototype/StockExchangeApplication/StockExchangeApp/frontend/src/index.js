// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.css'; // Import global styles
import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);