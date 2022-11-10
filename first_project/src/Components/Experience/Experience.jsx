import React from 'react'
import './Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skill I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'> <BsPatchCheckFill className='experience__details-icon'/>
             <div><h4>HTML5</h4>
            <small className='text-light'>Experienced</small></div>
            </article>
            <article className='experience__details'> <BsPatchCheckFill className='experience__details-icon'/>
            <div><h4>CSS3</h4>
            <small className='text-light'>Intermidiate</small></div>
            </article>
            <article className='experience__details'> <BsPatchCheckFill className='experience__details-icon'/>
            <div><h4>JAVASCRIPT</h4>
            <small className='text-light'>Experienced</small></div>
            </article>
            <article className='experience__details'> <BsPatchCheckFill className='experience__details-icon'/>
            <div>  <h4>BOOTSTRAP</h4>
            <small className='text-light'>Experienced</small></div>
            </article>
            <article className='experience__details'> <BsPatchCheckFill className='experience__details-icon'/>
            <div> <h4>TAILWIND</h4>
            <small className='text-light'>Basic</small></div>
            </article>
            <article className='experience__details'> <BsPatchCheckFill className='experience__details-icon'/>
            <div><h4>REACT</h4>
            <small className='text-light'>Experienced</small></div>
            </article>
            <article className='experience__details'> <BsPatchCheckFill className='experience__details-icon'/>
           <div> <h4>REDUX</h4>
            <small className='text-light'>Intermidiate</small></div>
            </article>
            
          </div>
        </div>
        {/*End of FrontEnd */}
        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'> <BsPatchCheckFill className='experience__details-icon'/>
           <div> <h4>Node JS</h4>
            <small className='text-light'>BASIC</small></div>
            </article>
            <article className='experience__details'> <BsPatchCheckFill className='experience__details-icon'/>
           <div> <h4>Mongo DB</h4>
            <small className='text-light'>Intermidiate</small></div>
            </article>
            <article className='experience__details'> <BsPatchCheckFill className='experience__details-icon'/>
           <div> <h4>GIT / GIT-HUB</h4>
            <small className='text-light'>Intermidiate</small></div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience