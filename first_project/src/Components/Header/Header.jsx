import React from 'react'
import "./Header.css";
import CTA from './CTA';
import ME from "../../Assets/me1.jpg";
import HeaderSocial from './HeaderSocial';
import { RiCustomerService2Fill } from 'react-icons/ri';


const Header = () => {
   const Heading ={
    fontFamily:'cursive',
    color:'gold'
   }
  return (
    <section>
    <header>
      <div className="container header__container">
        <h5 >Hello I'm</h5>
        <h1 style={Heading}> Deepak </h1>
        <h5 className="text-light">Web-Developer</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={ME} alt="me1" />
        </div>
        <a href="#contact" className="scroll__down">Scroll Down</a>


      </div>
    </header>
    </section>
  )
}

export default Header;