import React from 'react';

function Project(props) {

  const openPage = () => {
    window.open(props.page);
  }

  const openSource = () => {
    window.open(props.link);
  }

  return(
    <div className="project-card">
      <img src={props.image} alt={props.alt} />
      <div className="project-content">
        <h2>{props.title}</h2>
        <p>{props.content}</p>
        <button className="visit-btn" onClick={openPage}>Visit site</button>
        <button onClick={openSource} className="source-btn">Source Code</button>
      </div>
    </div>
  );
}

export default Project;
