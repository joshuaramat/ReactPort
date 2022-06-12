import React from 'react';
import moviedashboard from '../../assets/movieDashboard.jpeg';
import codequiz from '../../assets/code-quiz.png';
import notetaker from '../../assets/note-taker.png';
import passwordgen from '../../assets/password-generator.jpg'
import weatherdash from '../../assets/weather-dashboard.png'
import scheduler from '../../assets/work-day-scheduler.png'

function Port() {
	return (
		<section className='port cover'>
			<div className='content'>
				<h4>Portfolio</h4>
				<ul className='grid'>
					<li className='grid-item'>
						<a href='https://github.com/joshuaramat/movie-dashboard' class='github' target='_blank' rel='noreferrer'>
							<i className='fab fa-github'></i>
						</a>
						<a href='https://blooming-stream-54961.herokuapp.com/' target='_blank' rel='noreferrer'>
							<img
								src={moviedashboard}
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

					<li className='grid-item'>
						<a href='https://github.com/joshuaramat/code-quiz' class='github' target='_blank' rel='noreferrer'>
							<i className='fab fa-github'></i>
						</a>
						<a href='https://joshuaramat.github.io/code-quiz/' target='_blank' rel='noreferrer'>
							<img src={codequiz} alt='screenshot of a coding quiz' className='screenshot' />
							<div className='project-info'>
								<span>Code Quiz</span>
								<span className='project-details'>JavaScript</span>
							</div>
						</a>
					</li>

					<li className='grid-item'>
            <a href="https://github.com/joshuaramat/note-taker" class="github" target="_blank" rel="noreferrer">
							<i className="fab fa-github"></i>
						</a>
            <a href="https://limitless-dusk-41992.herokuapp.com/" target="_blank" rel="noreferrer">
              <img src={notetaker} alt="" className="screenshot" />
              <div className="project-info">
                <span>Note Taker</span>
                <span className="project-details">Express.js</span>
              </div>
            </a>
          </li>

					<li className='grid-item'>
            <a href="https://github.com/joshuaramat/password-gen" class="github" target="_blank" rel="noreferrer">
							<i className="fab fa-github"></i>
						</a>
            <a href="https://joshuaramat.github.io/password-gen/" target="_blank" rel="noreferrer">
              <img src={passwordgen} alt="" className="screenshot" />
              <div className="project-info">
                <span>Password Generator</span>
                <span className="project-details">JavaScript</span>
              </div>
            </a>
          </li>

					<li className='grid-item'>
            <a href="https://github.com/joshuaramat/weather-dashboard" class="github" target="_blank" rel="noreferrer">
							<i className="fab fa-github"></i>
						</a>
            <a href="https://joshuaramat.github.io/weather-dashboard/" target="_blank" rel="noreferrer">
              <img src={weatherdash} alt="" className="screenshot" />
              <div className="project-info">
                <span>Weather Dashboard</span>
                <span className="project-details">API Development</span>
              </div>
            </a>
          </li>

					<li className='grid-item'>
            <a href="https://github.com/joshuaramat/scheduler" class="github" target="_blank" rel="noreferrer">
							<i className="fab fa-github"></i>
						</a>
            <a href="https://joshuaramat.github.io/scheduler/" target="_blank" rel="noreferrer">
              <img src={scheduler} alt="" className="screenshot" />
              <div className="project-info">
                <span>Workday Scheduler</span>
                <span className="project-details">JavaScript</span>
              </div>
            </a>
          </li>
				</ul>
			</div>
		</section>
	);
}

export default Port;