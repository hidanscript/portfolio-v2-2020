import React from 'react';
import './index.css';

function SkillCard(props) {
  return(
    <div className="skill-card">
      <img src={props.image} alt={props.alt} />
      <h3>{props.title}</h3>
      <p>{props.content}</p> 
    </div>
  );
}

export default SkillCard;
