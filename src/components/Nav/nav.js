import React, { useState } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav() {
	const [currentProject, setCurrentProject] = useState(projects[0]);
	const [projects] = useState([
		{
			name: 'Movie Search Engine',
			description: 'description of movie search engine'
		},
		{
			name: 'Note Taker',
			description: 'description of note taker'
		},
		{
			name: 'Weather Dashboard',
			description: 'description of weather dashboard'
		}
	])
	return (
		<header>
			<h2>
					<a data-testid="link" href="/">
							<span role="img" aria-label="develop">👨‍💻</span>
							Joshua Ramat
					</a>
			</h2>
			<nav>
				<ul className="flex-row">
					<li className="mx-2">
						<a data-testid="link" href="#about">
							About
						</a>
					</li>
					<li className="mx-2">
						<a data-testid="link" href="#portfolio">
							Portfolio
						</a>
					</li>
					<li>
						<span>Contact</span>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Nav;