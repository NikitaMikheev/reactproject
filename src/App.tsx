import React from 'react';
import { MainPage } from './containers/MainPage';
import { Register } from './containers/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<MainPage/>}/>
        <Route path='register' element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;