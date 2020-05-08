import React from 'react';
import Project from './project.js';
import ChatScreen from '../../Assets/chat2.png';
import TodoScreen from '../../Assets/todo.png';
import './index.css';

function Portfolio() {
  return(
    <div id="portfolio" className="portfolio">
      <h2>PORTFOLIO</h2>
      <Project
        image={ChatScreen}
        alt="chat"
        title="Sweeper (Whatsapp Web Clone)"
        content="A realtime chat, made with React, Node.js, Express and Socket.io."
        link="https://github.com/hidanscript/sweeper-web"
        page="/apps/chat"
      />
      <Project
        image={TodoScreen}
        alt="todo"
        title="ToDo List App"
        content="Task app, made with React, Node.js, Express and MongoDB, consuming a REST API."
        link="https://github.com/hidanscript/todo-fe"
        page="/apps/todo"
      />
    </div>
  );
}

export default Portfolio;
