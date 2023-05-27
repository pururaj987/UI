import React from "react";

function Navbar() {
  return (
    <div>
      <div className="container">
        <nav class="nav-section">
          <div class="logo"></div>
          <div class="navbar">
            <a href="#" class="nav-item">
              HOME
            </a>
            <a href="#" class="nav-item">
              ABOUT
            </a>
            <a href="#" class="nav-item">
              PAPERS
            </a>
            <a href="#" class="nav-item">
              CONTACT
            </a>
          </div>
          <button class="signin-btn">SIGN IN</button>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
