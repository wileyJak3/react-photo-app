import React from "react";
import Navbar from "react-bootstrap/Navbar";
import instagramLogo from "../assets/images/instagramLogoTransparent.png";
import bookmarkLogo from "../assets/images/bookmark-icon.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "../styles/nav-bar.css";

function PhotoAppNavbar() {
  return (
    <div className="navContainer">
      <Navbar bg="dark">
        <Navbar.Brand href="#home">
          <img
            src={instagramLogo}
            width="50"
            height="50"
            className="d-inline-block align-center"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>

        <div className="navbar-content-container">
          <div className="navbar-content-text">
          <p id="webName">Minstagram</p>
          </div>

          <div className="navbar-content">
            

            <img
              id="bookmarkIcon"
              src={instagramLogo}
              width="50"
              height="50"
              alt="React Bootstrap logo"
            />
            <img
              id="bookmarkIcon"
              src={instagramLogo}
              width="50"
              height="50"
              alt="React Bootstrap logo"
            />
            <img
              id="bookmarkIcon"
              src={instagramLogo}
              width="50"
              height="50"
              alt="React Bootstrap logo"
            />
          </div>
        </div>
      </Navbar>
    </div>
  );
}

export default PhotoAppNavbar;
