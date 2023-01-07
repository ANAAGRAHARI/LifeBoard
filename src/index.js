import React from "react";
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { ContextP } from "./context/ContextP";

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <ContextP>
    <App />
    </ContextP>
)