import React from 'react';
import resume from '../../assets/resume.joshua.ramat.pdf'

function Resume() {
  return (
    <section className='resume cover'>
      <div className='content'>
        <h2>Skills</h2>
        <ul>
          <li>JavaScript</li>
          <li>React.js</li>
          <li>jQuery</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MySQL</li>
          <li>API's</li>
          <li>HTML/CSS</li>
          <li>Responsive and Accessible Design</li>
        </ul>
        <a href={resume} className='btn'>Resume</a>
      </div>
    </section>
  )
}

export default Resume;