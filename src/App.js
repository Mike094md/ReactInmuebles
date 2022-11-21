import { useState, useEffect } from 'react'
import ListProperty from './components/ListProperty'


function App() {

 
  
  return (
    <div className="App">
    <div className="container-fluid bg-dark mb-5 d-flex justify-content-center align-items-center" style={{ height: '80px'}}>
      <h1 className="fs-1 text-center text-light">Bienvenido a React js</h1>
    </div>
      <ListProperty />
    </div>
  );
}

export default App;
