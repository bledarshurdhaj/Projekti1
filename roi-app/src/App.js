import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes ,  Route } from 'react-router-dom';
import Index from './pages/Index';
import Rrethnesh from './pages/rrethnesh';
import Services from './pages/services';
import Contact from './pages/contact';
import SignUp from './pages/signup';
import { Switch } from 'react-router-dom';
import Layout from './pages/Layout';




function App() {
  return (

    <> 
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Index/>}/>
        <Route path='/rrethnesh' element={<Rrethnesh/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/contact-us' element={<Contact/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>

      </Route>
     </Routes>
    </BrowserRouter>
  
    </>


  );
};

export default App;