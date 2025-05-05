import React from 'react';


function Clubs({ content }) {
  const { clubExperience } = content;

  return (
    <div>
      <h2>Extracurriculars</h2>
      {clubExperience.map((exp, idx) => (
        <div key={idx}>
          <p><h3><b>{exp.clubTitle}</b></h3></p>
          <p><b>{exp.role}</b> | {exp.period}</p>
          <p></p>
          <p>{exp.accomplishments}</p>
          <br />
        </div>
      ))}
      <hr />
    </div>
  );
}

export default Clubs;

