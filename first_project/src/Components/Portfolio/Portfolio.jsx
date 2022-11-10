import React from 'react'
import './Portfolio.css'
import IMG1 from '../../Assets/pot.jpg';
import IMG2 from '../../Assets/ecom.png';
import IMG3 from '../../Assets/wet.jpg';
import IMG4 from '../../Assets/spoti.jpg';
const Portfolio = () => {

  const data = [
    {id:1, image:IMG1, title:'This is my Portfolio', github:'https://github.com', demo:'https://github.com' },
    {id:2, image:IMG2, title:'This is Amazon clone', github:'https://github.com', demo:'https://github.com' },
    {id:3, image:IMG3, title:'This is Live Weather Forecast', github:'https://github.com', demo:'https://github.com' },
    {id:4, image:IMG4, title:'This is Spotify Clone', github:'https://github.com', demo:'https://github.com' },
  ]
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) =>{
            return(
              <article key={id} className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title} </h3>
         <div className='portfolio__item-cta'>
         <a href={github} className='btn'>Github</a>
          <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
         </div>
        </article>
            )
          })
        }

      </div>
    </section>
  )
}

export default Portfolio