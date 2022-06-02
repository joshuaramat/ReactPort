import React from "react";
import { Link } from "react-router-dom"

function Nav() {
	return (
		<header>
			<h2>
				<a data-testid="link" href="/home" className="title">
					<span role="img" aria-label="develop">💻</span>
					Joshua Ramat
				</a>
			</h2>
			<nav>
				<ul className="flex-row">
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/portfolio">Portfolio</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
					<li>
						<span href="">
							Resume
						</span>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Nav;