import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav() {
	return (
		<header>
			<h2>
				<a data-testid="link" href="/home">
					<span role="img" aria-label="develop">💻</span>
					Joshua Ramat
				</a>
			</h2>
			<nav>
				<ul className="flex-row">
					<li>
						<a data-testid="link" href="#about">
							About
						</a>
					</li>
					<li>
						<a data-testid="link" href="#portfolio">
							Portfolio
						</a>
					</li>
					<li>
						<a data-testid="link" href="#contact">
							Contact
						</a>
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