import React from 'react';
import { Link } from 'react-router-dom'

function Nav() {
	return (
		<header>
			<h1>
				<a data-testid='link' href='/ReactPort' className='title'>
					Joshua Ramat
				</a>
			</h1>
			<nav>
				<ul className='flex-row'>
					<li>
						<Link to='/about'>About</Link>
					</li>
					<li>
						<Link to='/portfolio'>Portfolio</Link>
					</li>
					<li>
						<Link to='/contact'>Contact</Link>
					</li>
					<li>
						<Link to='/resume'>Resume</Link>
					</li>
				</ul>	
			</nav>
		</header>
	)
}

export default Nav;