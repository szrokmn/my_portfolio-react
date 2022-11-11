import React from 'react'
import "./Experience.css"
import { BsPatchCheckFill } from "react-icons/bs"

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>

          <article className="experience__details">
            <BsPatchCheckFill/>
            <h4>HTML</h4>
            <small className='text-light'>Experience</small>
          </article>

          <article className="experience__details">
            <BsPatchCheckFill/>
            <h4>CSS</h4>
            <small className='text-light'>Intermediate</small>
          </article>

          <article className="experience__details">
            <BsPatchCheckFill/>
            <h4>Javascript</h4>
            <small className='text-light'>Experience</small>
          </article>

          <article className="experience__details">
            <BsPatchCheckFill/>
            <h4>Bootstrap</h4>
            <small className='text-light'>Experience</small>
          </article>

          <article className="experience__details">
            <BsPatchCheckFill/>
            <h4>Tailwind</h4>
            <small className='text-light'>Experience</small>
          </article>
          
          <article className="experience__details">
            <BsPatchCheckFill/>
            <h4>React</h4>
            <small className='text-light'>Experience</small>
          </article>


        </div>
      </div>
      <div className="experience__backend">
      <h3>Backend Development</h3>

      <article className="experience__details">
            <BsPatchCheckFill/>
            <h4>Node Js</h4>
            <small className='text-light'>Experience</small>
          </article>

          <article className="experience__details">
            <BsPatchCheckFill/>
            <h4>MongoDB</h4>
            <small className='text-light'>Intermediate</small>
          </article>

          <article className="experience__details">
            <BsPatchCheckFill/>
            <h4>PHP</h4>
            <small className='text-light'>Experience</small>
          </article>

          <article className="experience__details">
            <BsPatchCheckFill/>
            <h4>MySQL</h4>
            <small className='text-light'>Experience</small>
          </article>

          <article className="experience__details">
            <BsPatchCheckFill/>
            <h4>Phython</h4>
            <small className='text-light'>Experience</small>
          </article>
          
          <article className="experience__details">
            <BsPatchCheckFill/>
            <h4>Agile</h4>
            <small className='text-light'>Experience</small>
          </article>

      </div>
    </section>
  )
}

export default Experience
