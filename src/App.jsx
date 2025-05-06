import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Record from './pages/Record';
import Navbar from './components/Navbar';
import About from './pages/About';
import Login from './pages/Login';
import Signup from './pages/Signup';


function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/record" element={<><Navbar /><Record /></>} />
        <Route path="/About" element={<><Navbar /><About /></>} />
        <Route path="/login" element={<><Navbar /><Login /></>} />
        <Route path="/signup" element={<><Navbar /><Signup /></>} />
      </Routes>
    </Router>
  );
}

export default App;
