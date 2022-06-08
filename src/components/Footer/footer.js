import React from 'react';

function Footer() {
  const links = [
    {
      type: 'mailto:ramatjoshua@gmail.com',
      style: 'fas fa-envelope'
    },
    {
      link: 'https://github.com/joshuaramat',
      style: 'fab fa-github'
    },
    {
      link: 'https://www.linkedin.com/in/joshuaramat/',
      style: 'fab fa-linkedin'
    }
  ];

  return (
    <footer>
      <ul>
        {links.map((link, index) =>
          <li key={index}>
            <a href={link.type} key={index}>
              <i className={icon.style}></i>
            </a>
          </li>
        )}
      </ul>
    </footer>
  );
}

export default Footer;