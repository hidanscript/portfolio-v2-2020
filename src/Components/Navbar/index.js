import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './index.css';

function Navbar() {

  let github_url = "https://github.com/hidanscript"

  return(
    <nav className="prueba-nav">
      <ul>
        <li><AnchorLink className="anchor" href="#portfolio">PORTFOLIO</AnchorLink></li>
        <li><a className="anchor" href={github_url} target="_blank" rel="noopener noreferrer">GITHUB</a></li>
        <li><AnchorLink className="anchor" href="#contact">CONTACT</AnchorLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
