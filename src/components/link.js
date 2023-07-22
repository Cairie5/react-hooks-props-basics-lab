import React from "react";

function Links(props) {
  return (
    <div>
      <h3>Links</h3>
      <p>Github: <a href={props.github}>GitHub Profile</a></p>
      <p>LinkedIn: <a href={props.linkedin}>LinkedIn Profile</a></p>
    </div>
  );
}

export default Links;
