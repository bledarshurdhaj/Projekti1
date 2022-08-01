import React from 'react';
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import rrethnesh from './pages/rrethnesh';
import Services from './pages/services';
import Contact from './pages/contact';
import SignUp from './pages/signup';

import Footer from './footer'
function App() {
  return (

    <>
   <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={rrethnesh} />
        <Route path='/services' component={Services} />
        <Route path='/contact-us' component={Contact} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/' exact component={Home} />
      </Switch>
    
    </Router>
    </>


  );
};

export default App;