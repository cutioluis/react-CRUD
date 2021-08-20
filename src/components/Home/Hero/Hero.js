import React from "react";
import './Hero.css'

import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
      <h1 className="hero__title">
        Simple Todo App for <span className="hero__title-pink">everyone.</span>
      </h1>
      <p className="hero__text">
        Revisa todo el proceso de tu productividad con todo Machine de princpio
        a fin, y descrubre que tran facil es organizarte
      </p>
      <Link to="/todo">
        <button className="hero__btn">Empezar</button>
      </Link>
    </section>
  );
};

export default Hero;
