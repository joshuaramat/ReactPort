import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import movieDashboard from '../../assets/movieDashboard.jpeg';

function Port(props) {
	const currentProject = {
		name: 'project 1',
		description: 'project description'
	};
	return (
		<section>
			<h1>{capitalizeFirstLetter(currentProject.name)}</h1>
			<p>{currentProject.description}</p>
			<div>
				<img
					src={movieDashboard}
					alt='Movie Search Engine'
				/>
			</div>
		</section>
	);
}

export default Port;