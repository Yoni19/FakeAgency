/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
  } from "react-router-dom";

const NavWorks = () => {
  return (
    <nav class="breadcrumb is-centered" aria-label="breadcrumbs">
    <ul>
      <li>
      <Link to="/works/Exercices">Exercices</Link>
      </li>
      <li>
      <Link to="/works/Case_study">Étude de cas</Link>
      </li>
      <li>
      <Link to="/works/Projets_concrets">Projets concrets</Link>
      </li>
    </ul>
  </nav>
 
  )

};
  
  



export default NavWorks;