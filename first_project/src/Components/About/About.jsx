import React from 'react'
import "./About.css"
import ME from '../../Assets/me5.JPG'
import {FaAward} from  'react-icons/fa'
import {BiUserPlus} from 'react-icons/bi'
import {BiUserCheck} from 'react-icons/bi'

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <img src={ME} alt="me" />
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2 Year + working experience</small>
            </article>
            <article className="about__card">
              <BiUserPlus className='about__icon'/>
              <h5>Clients</h5>
              <small>1 + working experience</small>
            </article>
            <article className="about__card">
              <BiUserCheck className='about__icon'/>
              <h5>Project</h5>
              <small>10+ Worldwide </small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id facere, non labore ipsam perferendis odio culpa enim voluptatibus aperiam in quos impedit beatae placeat, possimus temporibus reprehenderit commodi illo quisquam?</p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About