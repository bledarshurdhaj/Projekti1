import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './Navbarstyles';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={require('/Users/ar/Desktop/LABCourse-1/my-app/Projekti1/roi-app/src/foto/logo5.png')} alt='logo' />
        </NavLink>
        <Bars />
        <NavMenu>
        <NavLink to='/' activeStyle>
            Ballina
          </NavLink>
          <NavLink to='/about' activeStyle>
            Rreth Nesh
          </NavLink>
          <NavLink to='/services' activeStyle>
           Sherbimet 
          </NavLink>
          <NavLink to='/contact-us' activeStyle>
           Kontakt
          </NavLink>
          <NavLink to='/sign-up' activeStyle>
           Lajme
          </NavLink>
        
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Kyquni</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
