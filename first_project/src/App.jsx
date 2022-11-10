import React from 'react'
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Services from "./Components/Services/Services";
import Footer from "./Components/Footer/Footer";

import Experience from './Components/Experience/Experience';
import Portfolio from './Components/Portfolio/Portfolio'



const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      
      <Contact />
      <Footer />


 

    </>
  )
}

export default App;