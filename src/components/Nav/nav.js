import React from "react";

function Nav() {
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