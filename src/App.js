import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/home';
import Login from './pages/Login/login';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          {/* Añadir más rutas aquí en el futuro */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;