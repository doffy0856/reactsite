 import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Route  } from "react-router-dom";

//content
import Home from './content/Home'
import About from './content/About'
import Education from './content/Education'
import Skills from './content/Skills'
import Contact from './content/Contact'





function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> 
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/education">
          <Education />
        </Route>
        <Route exact path="/skills">
          <Skills />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>

      </div>
    </Router>  
  );
}

export default App;
