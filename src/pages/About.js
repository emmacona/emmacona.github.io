import React from 'react';
import './about.css';

function About() {
    return (
      <div className="about">
        <img src="/profile.jpg" alt="Emmanuelle" className="profile-image" />
        <div className="description">
          <h1>About Me</h1>
         < p>
          Hi, I'm <span className="highlight">Emmanuelle Coutu-Nadeau</span>, a <span className="highlight">psychology master's student </span> 
          specializing in the clinical applications of <span className="highlight">Artificial Intelligence </span> 
          to identify neurological markers of autism in EEG recordings.
          I have a background in <span className="highlight">software engineering</span> and experience in <span className="highlight">digital health</span> as a 
          Software Developer and Project Manager at <span className="highlight">CareSimple</span>.
        </p>
        <p>
          My journey combines <span className="highlight">technology</span>, <span className="highlight">healthcare</span>, 
          and <span className="highlight">neuropsychology</span> to make meaningful discoveries and advancements in the field. 
          I’m excited about the intersections of <span className="highlight">Artificial Intelligence</span> and <span className="highlight">mental health</span>, and aim to 
          contribute to innovative solutions that benefit both research and clinical practices.
        </p>
        </div>
      </div>
    );
  }

export default About;
