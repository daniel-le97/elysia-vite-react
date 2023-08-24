import {createRoot} from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
import { App } from './App.jsx';

document.addEventListener('DOMContentLoaded', () => {
    createRoot(document.getElementById("app")).render(
        <App/>
    );
});