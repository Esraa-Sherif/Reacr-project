import React from "react";
import { Link } from 'react-router-dom';

export default function NavBar() {
    return
        <>
        <nav className="navbar navbar-expand-lg py-4">
  <div className="container">
    <a class="navbar-brand fw-bold text-white" href="#">Start Framework</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse me-auto" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active fw-bold me-3 text-white" aria-current="page" to={"/"}>HOME</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fw-bold me-3 text-white" to={"/about"}>ABOUT</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link fw-bold me-3 text-white" to={"/portfolio"}>PORTFOLIO</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link fw-bold me-3 text-white" to={"/contact"}>CONTACT</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </>
}