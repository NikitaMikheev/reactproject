import React from 'react';
import { MainPage } from './containers/MainPage';
import { Register } from './containers/Register';
import { Authentication } from './containers/Auth';
import { UserPage } from './containers/UserPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<MainPage/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='login' element={<Authentication/>}/>
        <Route path='user' element={<UserPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;