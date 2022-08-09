import React from 'react';
import './App.css';
import { BrowserRouter, Routes ,  Route } from 'react-router-dom';
import Index from './pages/Index';
import Rrethnesh from './pages/rrethnesh';
import Services from './pages/services';
import Contact from './pages/contact';
import Biznes from './pages/biznes';
import Lajme from './pages/lajme';
import NoPage from './pages/nopage';
import Kyquni from './pages/kyquni';
import "bootstrap/dist/css/bootstrap.min.css";
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
        <Route path='/lajme' element={<Lajme/>}/>
        <Route path='/biznes' element={<Biznes/>}/>
        <Route path='/kyquni' element={<Kyquni/>}/>
        <Route path='*' element={<NoPage/>}/>

      </Route>
     </Routes>
    </BrowserRouter>
  
    </>


  );
};

export default App;