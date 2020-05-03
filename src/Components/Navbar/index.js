import React from 'react';
import './index.css';

function Navbar() {

  let github_url = "https://github.com/hidanscript"

  return(
    <nav>
      <ul>
        <li><a href="#">PORTFOLIO</a></li>
        <li><a href={github_url} target="_blank">GITHUB</a></li>
        <li><a href="#">CONTACT</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
