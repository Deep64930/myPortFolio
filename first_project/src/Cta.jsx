import React from 'react'
import CV from './Assets/syllabus.pdf';


const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} download></a>
        <a href="#Contact"></a>
    </div>
  )
}

export default CTA