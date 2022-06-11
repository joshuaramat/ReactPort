import React from 'react';
import joshua from '../../assets/joshua.JPG';

function About() {
	return (
		<>
			<section className='about cover'>
				<div className='content'>
					<h4>About</h4>
					<img src={joshua} alt='portrait of Joshua' className='photo' />
					<p>Hello, My name is Joshua! I have a brackground as a physical therapy aide with a mission to help others. I made the switch to web dev when I realized my affinity for technology.

					<br></br>
					<br></br>

					Thorogh and meticulous software engineer with the ability to analyze user needs and design software solutions customized to clients preferences. Oustanding attention to detail with a passion for problem-solving and continued learning. Applying my background in physical therapy, I haves trong written and people skills with experience collaborating in groups. Proficient in HTML/CSS, JavaScript, jQuery, Node.js, React.js, MySQL, Heroku, and Git Workflow. Come checkout my work!</p>
				</div>
			</section>
		</>
	);
}

export default About;