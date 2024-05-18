// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import Profile from './Pages/Profile';
import Achievements from './Pages/Achievements';
import Navbar from './Components/Navbar';
import Pixels from './Pages/ProjectsPages/Pixels'
import EZRecharge from './Pages/ProjectsPages/EZRecharge'
import TicTacToe from './Pages/ProjectsPages/TicTacToe'
import HRManagement from './Pages/ProjectsPages/HRManagement'
import Portfolio from './Pages/ProjectsPages/Portfolio'
import WeatherApp from './Pages/ProjectsPages/WeatherApp'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/home" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/achievements" element={<Achievements/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/pixels" element={<Pixels/>} />
          <Route path="/EZRecharge" element={<EZRecharge/>} />
          <Route path="/TicTacToe" element={<TicTacToe/>} />
          <Route path="/HRManagement" element={<HRManagement/>} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/WeatherApp" element={<WeatherApp/>} />
      </Routes>
    </Router>
  );
}

export default App;
