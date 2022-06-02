import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import movieDashboard from '../../assets/movieDashboard.jpeg';

function Port() {
	return (
		<section>
			<div>
				<h4>Portfolio</h4>
				<ul>
					<li>
						<a href="https://github.com/joshuaramat/movie-dashboard" class="githubLink">
							<i className="fab fa-github"></i>
						</a>
						<a>
							<img
								src={movieDashboard}
								alt='Movie Search Engine'
								className='screenshot'
							/>
							<div className="project-info">
								<div>
									Movie Search Engine
								</div>
								<div className="project-details">
									Full Stack project
								</div>
							</div>
						</a>
					</li>

					<li>
						<a href="" class="githubLink">
							<i className="fab fa-github"></i>
						</a>
						<a href="">
							<img src={} alt="" className="screenshot" />
							<div className="project-info">
								<div>Sample Project</div>
								<div className="project-details">Express.js</div>
							</div>
						</a>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Port;