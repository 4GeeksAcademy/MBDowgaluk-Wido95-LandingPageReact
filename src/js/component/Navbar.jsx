import React from "react";

export const Navbar = () => {
    return (
      <div>
      <nav className="navbar navbar-expand-lg bg-dark">
      
    <div className="container-fluid">
    <a className="navbar-brand text-light" href="#"><i className="fab fa-react text-white"></i></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end text-secondary" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-secondary" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-secondary" href="#">Service</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-secondary" href="#">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
       )
}