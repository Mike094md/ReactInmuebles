// import { useState, useEffect } from 'react'
// import ListProperty from './components/ListProperty'


// function App() {

 
  
//   return (
//     <div className="App">
//     <div className="container-fluid bg-dark mb-5 d-flex justify-content-center align-items-center" style={{ height: '80px'}}>
//       <h1 className="fs-1 text-center text-light">Bienvenido a React js</h1>
//     </div>
//       <ListProperty />
//     </div>
//   );
// }

// export default App;

import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import ListProperty from './components/ListProperty'
import NotLogin from './components/NotLogin'
import LoginCorrecto from './components/LoginCorrecto'

import ProtectedRoute from './AuthProvider/ProtectedRoute'



function App() {
    
  return (
      <>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<ListProperty />}/>
        <Route exact path="/nologin" element={<NotLogin />}/>
        {/* <Route exact path="/about" element={<About/>}/> */}
        <Route
          path="/logincorrecto"
          element={
          <ProtectedRoute>
            <LoginCorrecto />
          </ProtectedRoute>
        }
      />
      </Routes>

      </BrowserRouter>
      </>
  );
}
  
export default App;
