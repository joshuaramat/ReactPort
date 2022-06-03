import React from 'react';
import movieDashboard from '../../assets/movieDashboard.jpeg';
import codeQuiz from '../../assets/code-quiz.png';

function Port() {
	return (
		<section className='port cover'>
			<div className='content'>
				<h4>Portfolio</h4>
				<ul>
					<li>
						<a href='https://github.com/joshuaramat/movie-dashboard' class='github' target='_blank' rel='noreferrer'>
							<i className='fab fa-github'></i>
						</a>
						<a href='https://blooming-stream-54961.herokuapp.com/' target='_blank' rel='noreferrer'>
							<img
								src={movieDashboard}
								alt='Movie Search Engine'
								className='screenshot'
							/>
							<div className='project-info'>
								<span>
									Movie Search Engine
								</span>
								<span className='project-details'>
									Full Stack project
								</span>
							</div>
						</a>
					</li>

					<li>
						<a href='https://github.com/joshuaramat/code-quiz' class='github' target='_blank' rel='noreferrer'>
							<i className='fab fa-github'></i>
						</a>
						<a href='https://joshuaramat.github.io/code-quiz/' target='_blank' rel='noreferrer'>
							<img src={codeQuiz} alt='screenshot of a coding quiz' className='screenshot' />
							<div className='project-info'>
								<span>Code Quiz</span>
								<span className='project-details'>JavaScript/HTML/CSS</span>
							</div>
						</a>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Port;