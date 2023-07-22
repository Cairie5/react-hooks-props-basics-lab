import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import user from "../data/user";
import Links from "./link";

function App() {
  const { name, city, bio, github, linkedin } = user;

  return (
    <div>
      <NavBar />
      {/* Pass the user data as props to the Home component */}
      <Home name={name} city={city} color="blue" />

      {/* Pass the bio, github, and linkedin links as props to the About component */}
      <About bio={bio} github={github} linkedin={linkedin} />
    </div>
  );
}

export default App;
