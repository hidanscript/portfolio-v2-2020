import React from 'react';
import SkillCard from './skillcard';
import DesignLogo from '../../Assets/design2.png';
import CodeLogo from '../../Assets/code.png';
import ResponsiveLogo from '../../Assets/responsive.png';
import './index.css';

function Skills() {
  return(
    <div className="skills">
      <SkillCard
        image={DesignLogo}
        alt="design"
        className="offset"
        title="DESIGN"
        content="Modern designs, optimized for performance, SEO, using best practices of UX."
      />
      <SkillCard
        image={CodeLogo}
        alt="code"
        title="DEVELOPMENT"
        content="Clean and scalable code, using the latest technologies, covering Frontend and Backend."
      />
      <SkillCard
        image={ResponsiveLogo}
        alt="responsive"
        title="RESPONSIVE"
        content="Making web apps adapt to different devices, granting the user the best experience."
      />
    </div>
  );
}

export default Skills;
