import React from "react";
import { NavLink } from "react-router-dom";
const Error = () => {
  return (
    <div>
      <h1>You are in the Error page maybe your url was a mistake</h1>
      <h2>You can go back to home with this button</h2>
      <NavLink to={"/"}>
        <button>Accueil</button>
      </NavLink>
    </div>
  );
};

export default Error;
