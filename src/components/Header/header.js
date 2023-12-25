import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="headerLeft">
      <Link to="/">
        <img
          className="header__icon"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
          alt="IDMB LOGO"
        />
      </Link>
      <Link to="/movie/popular" style={{ textDecoration: "none" }}>
        <span>Popular</span>
      </Link>
      <Link to="/movies/top_rated" style={{ textDecoration: "none" }}>
        <span>Top Rated</span>
      </Link>
      <Link to="/movies/upcoming" style={{ textDecoration: "none" }}>
        <span>upcoming</span>
      </Link>
    </div>
  );
}
export default Header;
