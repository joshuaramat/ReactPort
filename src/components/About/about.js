import React from 'react';
import joshua from '../../assets/joshua.JPG';

function About() {
	return (
		<>
			<section className='about cover'>
				<div className='content'>
					<h4>About</h4>
					<img src={joshua} alt='' className='photo' />
					<p>Hello world!</p>
				</div>
			</section>
		</>
	);
}

export default About;