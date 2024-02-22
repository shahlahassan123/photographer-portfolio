import * as React from 'react'
import Nav from './Nav'

const About = () => {
  return (
    <div className='App'>
        <Nav />
        <div className="about">
        <h1>About Me</h1>
        <div className="containers">
        <div className="desc-container">
          <p className='desc'>
            I am Rahil Bassim. I am passionate about capturing the spark of genuine moments, turning them into memories you can treasure forever. Photography for me is not just about capturing the correct shot but about narrating your unique story. Together, let’s craft pictures that will serve as windows into your world!
          </p>
        </div>
        <div className="photo-container">
          <img src='./photograper.jpeg' alt="photographer" className='photo' />
          {/* <img src='./photographer2.png' alt="photographer" className='photo' />
          <img src='./Photographer3.png' alt="photographer" className='photo' /> */}
         </div>

        </div>
       
         
        </div>
    </div>
  )
}

export default About
