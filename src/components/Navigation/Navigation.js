import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/logo.svg";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <Link to="/">
          <li>
            <img src={Logo} alt="Todo machine" />
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navigation;
