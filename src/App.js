import React from 'react';
import {Routes, Route } from 'react-router-dom';

import { ThemeProvider } from 'styled-components'; 
import Home from './Pages/Home';
import Starred from './Pages/Starred';
import Show from './Pages/Show';



function App() {
     const theme = {
          mainColors: {
            orange: '#FFA500',
            gray: '#c6c6c6',
            dark: '#353535',
            brown:'#7B3F00',
            coral:'#E3963E',

          },
        };
        
    return (
     <ThemeProvider theme={theme}>
         <div>
        <Routes>
        <Route path= "/" element ={ <Home />} /> 
        <Route path= "/starred" element = { <Starred />} />  
        <Route path='/show/:id' element={ <Show />} />
        <Route path='*' element={<div> Page not found </div>} />
        </Routes>

             </div>
             </ThemeProvider>
        );
    }

    export default App;