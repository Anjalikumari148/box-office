import React from 'react';
import {Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Starred from './Pages/Starred';


function App() {
    return (
         <div>
        <Routes>
        <Route path = "/"
        
        element ={ <Home />} /> 
        <Route path = "/starred"
    
        element = { <Starred />} /> 
        <Route element = { <div> Page not found </div>} />
        </Routes>
             
             </div>
        );
    }

    export default App;