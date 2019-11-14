import React from "react";


const Navbar = () => (
  <nav
    className="navbar navbar-light bg-light shadow"
    style={{

      color: "#153243"
    }}
  >

    <a
      className="navbar-brand"
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: "#153243" }}
      href="https://github.com/jzepedaa"
    >
      {/* <img
        src={SmallLogo}
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt=""
      />{" "} */}
      Jaime Zepeda
    </a>
    <div className="navbar-nav navbar-expand-lg mr-lg-auto">
      <a
        className="nav-item nav-link p-2"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#153243" }}
        href="https://github.com/jzepedaa"
      >
        Github
      </a>
      <a
        className="nav-item nav-link"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#153243" }}
        href="https://linkedin.com/in/jaime-zepeda02/"
      >
        LinkedIn
      </a>
    </div>
    <span className="navbar-text" style={{ color: "#153243" }}>
      Mobile:(773)-414-5210 /  Email: jxzepeda@gmail.com
    </span>
  </nav>
);


export default Navbar;