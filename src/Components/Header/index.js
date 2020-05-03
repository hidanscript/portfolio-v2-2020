import React from 'react';
import Navbar from '../Navbar';
import './index.css';
import JS from '../../Assets/js.png';

function Header() {
  return(
    <header>
      <Navbar />
      <div className="name-banner">
        <h1>David Marcano</h1>
        <h3>Fullstack Software Developer</h3>
        <button>GET STARTED</button>
      </div>
      <div className="bgimage">
        <img src={JS} alt="javascript" draggable="false" />
      </div>
    </header>
  );
}

export default Header;
