import React from 'react'
import "./Services.css";

import {BsCheck2} from 'react-icons/bs';
const Services = () => {
  return (
    <section id="services">
      <h5>What i offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
            <BsCheck2 className="service__list-icon" />
            <p>Adobe illustrator</p></li>
            <li>
            <BsCheck2 className="service__list-icon" />
            <p>Google Drawing</p></li>
            <li>
            <BsCheck2 className="service__list-icon" />
            <p>lorem8</p></li>
            <li>
            <BsCheck2 className="service__list-icon" />
            <p>lorem8</p></li>
            <li>
            <BsCheck2 className="service__list-icon" />
            <p>lorem8</p></li>
          </ul>
        </article>
       


      <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
            <BsCheck2 className="service__list-icon" />
            <p>Java Script</p></li>
            <li>
            <BsCheck2 className="service__list-icon" />
            <p>React Js</p></li>
            <li>
            <BsCheck2 className="service__list-icon" />
            <p>Next js</p></li>
            <li>
            <BsCheck2 className="service__list-icon" />
            <p>React Native</p></li>
            <li>
            <BsCheck2 className="service__list-icon" />
            <p>lorem8</p></li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services