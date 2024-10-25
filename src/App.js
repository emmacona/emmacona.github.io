import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Tabs from './components/Tabs';
import About from './pages/About';
import CV from './pages/CV';
import Publications from './pages/Publications';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="header">
        </header>
        <Tabs />
        <div className="content">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/publications" element={<Publications />} />
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
