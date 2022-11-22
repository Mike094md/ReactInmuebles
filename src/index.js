import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="App">
    <div className="container-fluid bg-dark mb-5 d-flex justify-content-center align-items-center" style={{ height: '80px'}}>
      <h1 className="fs-1 text-center text-light">Bienvenido a React js</h1>
    </div>
    <App />
    </div>
  </React.StrictMode>
);
