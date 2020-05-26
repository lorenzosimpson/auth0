import React from "react";

import logo from "../assets/logo.svg";
import { useAuth0 } from "../react-auth0-spa";


const Hero = () => {
  const { user } = useAuth0();
console.log(user)
 return (
  <div className="text-center hero my-5">
    <img className="mb-3 app-logo" src={logo} alt="React logo" width="120" />
    <h1 className="mb-4">Lambda Technical Interview Demo</h1>

    <p className="lead">
      Refactored from Auth0 SPA boilerplate to demonstrate persistent login and session handling.
    </p>
  </div>
 );
 };

export default Hero;
