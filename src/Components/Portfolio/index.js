import React from 'react';
import Project from './project.js';
import ChatScreen from '../../Assets/chat2.png'
import './index.css';

function Portfolio() {
  return(
    <div className="portfolio">
      <h2>PORTFOLIO</h2>
      <Project
        image={ChatScreen}
        alt="chat"
        title="Sweeper (Whatsapp Web Clone)"
        content="A realtime chat, made with React, Node.js, Express and Socket.io."
        link="https://github.com/hidanscript/sweeper-web"
        page="/chat"
      />
    </div>
  );
}

export default Portfolio;
