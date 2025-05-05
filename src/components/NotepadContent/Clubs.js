import React from 'react';


function Clubs({ content }) {
  const { clubExperience } = content;

  return (
    <div>
      <h2>Extracurriculars</h2>
      {clubExperience.map((exp, idx) => (
        <div key={idx}>
          <p><h4><b>{exp.clubTitle}</b></h4></p>
          <p>{exp.role} | {exp.period}</p>
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

