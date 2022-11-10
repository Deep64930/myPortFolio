import React from 'react'

import CV from "../../Assets/re.pdf"

const CTA = () => {
  return (
   <div className="cta">
    <a href={CV}download className='btn'>Download</a>
    <a href="#contact" className='btn btn-primary'>Lets's Talk</a>
   </div>
  )
}

export default CTA