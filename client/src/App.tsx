import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss'; // Global SCSS
import LoginPage from './pages/login-page/LoginPage';
import CreateTemplatePage from './pages/create-template/CreateTemplatePage';
import Home from './pages/home/Home';

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/create-template" element={<CreateTemplatePage />} />
        </Routes>
      </div>
  );
}

export default App;
