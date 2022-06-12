import React from 'react';
import joshua from '../../assets/joshua.JPG';

function About() {
	return (
		<>
			<section className='about cover'>
				<div className='content'>
					<h4>About</h4>
					<img src={joshua} alt='' className='photo' />
					<p>
					I have a background as a physical therapy aide with a mission to help others. With a passion for problem solving and continued learning, I began my journey into web dev!  
					<br/>
					<br/>
					thorough and meticulous software engineer with the ability to analyze user needs and design software solutions customized to clients preferences with an outstanding attention to detail. Applying my background in physical therapy, I have strong written and people skills with experience collaborating in groups.  
					<br/>
					<br/>
					Proficient in HTML/CSS, JavaScript, jQuery, Node.js, React.js, MySQL, Heroku, and Git Workflow
					</p>
				</div>
			</section>
		</>
	);
}

export default About;