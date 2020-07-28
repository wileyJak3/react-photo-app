import React from "react";
import Navbar from "react-bootstrap/Navbar";
import instagramLogo from "../assets/images/instagramLogoTransparent.png";
import bookmarkLogo from "../assets/images/bookmark-icon.png";
import profileIcon from "../assets/images/profileTransparent.png";
import transparentLine from "../assets/images/Vertical-Line.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/nav-bar.css";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Container from "react-bootstrap/Container";
// import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 
"react-router-dom";
import { loginStatus } from '../App.js';




function PhotoAppNavbar() {
  console.log(loginStatus)
  
  let [login, setLogin] = React.useState(false);
  let [profile, setProfile] = React.useState(false);
  // let currentLogin = React.useContext(loginStatus)
  // let cl = currentLogin


function toggleProfile(){
    (profile == false) ? setProfile(true): setProfile(false);
}


function toggleLogin(){
  (login == false) ? setLogin(true): setLogin(false);
}

function toggleLoginProfile(){
  (login == false) ? setLogin(true): setLogin(false);
  (profile == false) ? setProfile(true): setProfile(false);
  // currentLogin = login
  
}





  return (
    <Navbar bg="light">
      <Navbar.Brand>
        <a className="nav-link">
          <Link to="/">
            <img
              src="https://vistapointe.net/images/dope-wallpaper-8.jpg"
              width="70"
              height="70"
              className="d-inline-block align-center"
              alt="React Bootstrap logo"
            />
          </Link>
        </a>
      </Navbar.Brand>
      <Nav className="mr-auto">
        <img
          id="bookmarkIcon"
          src={transparentLine}
          width="45"
          height="45"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />

        <Nav.Link id="minstagram-words">
          <a>
            <Link to="/">Dopestagram</Link>
          </a>
        </Nav.Link>
      </Nav>
      {/* <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
        <Navbar expand="lg" variant="light" bg="light">
          <Container>
            <Navbar.Brand href="#">Navbar</Navbar.Brand>
          </Container>
        </Navbar> */}

      <Nav className="mr-auto-2">
        <Nav.Link to="/bookmarks">
          <a className="nav-link">
            <Link to="bookmarks">
              <img
                id="bookmarkIcon"
                src={bookmarkLogo}
                width="45"
                height="45"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Link>
          </a>
        </Nav.Link>
        <Nav.Link ><a className="nav-link"> <Link to="/profile">
        {(login == false)? 
          <img
            id="bookmarkIcon"
            src={profileIcon}
            width="60"
            height="60"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />: <img
          id="profileImg"
          src="https://images.unsplash.com/photo-1560787313-5dff3307e257?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          width="60"
          height="60"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />}
        </Link>
          </a>
        </Nav.Link>
        {/* <Nav.Link href="#home"> */}
        <Nav.Link>
          <a className="nav-link">
            <Link>
              {/* <img
                id="bookmarkIcon"
                src={bookmarkLogo}
                width="45"
                height="45"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              /> */}
              <loginStatus.Provider value = {login}>
              {(login == false)? <Button onClick = {toggleLoginProfile} variant="light">Login</Button>: <Button onClick = {toggleLoginProfile} variant="light">Logout</Button>}
             </loginStatus.Provider>
            </Link>
          </a>
        </Nav.Link>
        {/* <Nav.Link href="#features"> */}

       
      </Nav>

      {/* <div className="navbarContent">
          <Row>
            <Col>
              <img
                id="bookmarkIcon"
                src={bookmarkLogo}
                width="45"
                height="45"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Col>
            <Col>
              <img
                id="bookmarkIcon"
                src={bookmarkLogo}
                width="45"
                height="45"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Col>
            <Col>
              <img
                id="bookmarkIcon"
                src={bookmarkLogo}
                width="45"
                height="45"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Col>
          </Row>
        </div> */}
    </Navbar>
    // ────────────────────────────────────────────────────────────────────────────────
  );
}

export default PhotoAppNavbar;
