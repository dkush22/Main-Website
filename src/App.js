import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom'
import Navbar from './components/Navbar.js'
import Contacts from './components/Contacts.js'
import Bio from './components/Bio.js'
import Resume from './components/Resume.js'
import FunStuff from './components/FunStuff.js'
import Projects from './components/Projects.js'
import Welcome from './components/Welcome.js'
import { withRouter } from 'react-router'



class App extends Component {
  render() {
    return (

      <div className="App">
      <Route path='/' render={(props) => <Navbar/>} />
      <Route exact path="/contact" render={(props) => <Contacts />} /> 
      <Route exact path="/bio" render={(props) => <Bio />} /> 
      <Route exact path="/resume" render={(props) => <Resume />} /> 
      <Route exact path="/projects" render={(props) => <Projects/>} />
      <Route exact path="/fun" render={(props) => <FunStuff/>} />
      <Route exact path="/" render={(props) => <Welcome/>} />
      </div>

    );
  }
}

export default App;
