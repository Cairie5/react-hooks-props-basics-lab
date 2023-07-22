import React from "react";

function About(props) {
  return (
    <div>
      <h2>About Me</h2>
      <p>{props.bio}</p>
      {/* Render the github and linkedin links directly */}
      <p>Github: <a href={props.github}>{props.github}</a></p>
      <p>LinkedIn: <a href={props.linkedin}>{props.linkedin}</a></p>
    </div>
  );
}

export default About;
