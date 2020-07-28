import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "../styles/profile.css";
import ProfilePhotogrid from './ProfilePhotogrid'
import { loginStatus } from '../App.js';


function Profile() {
  return (
    <div>
      <Container fluid>
        <div id="rowHeader">
          <Row>
            <h1> William Adebowale</h1>
          </Row>
        </div>
        <div className="rowContent">
        <Row xs={1} sm ={1} md ={2} lg={4} xl ={4}>
          
            <Col>
              <img
                id="profilePageImg"
                src="https://images.unsplash.com/photo-1560787313-5dff3307e257?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Col>
            <Col>
              <h3>1487</h3>
              <p>Post</p>
            </Col>
            <Col>
              <h3>898</h3>
              <p>followers</p>
            </Col>
            <Col>
              <h3>1310</h3>
              <p>Following</p>
            </Col>
          
        </Row>
        </div>
        <div className = "row-content-2" >
        <Row xs={1} sm ={1} md ={1} lg={1} xl ={1}>
          
            <Col>
              <h4>William Adebowale</h4>
            </Col>
            <Col>
              <p>These photos are all from unsplash and I am not a real person</p>
            </Col>
          
        </Row>
        </div>
        <Row xs={1} sm ={1} md ={1} lg={1} xl ={1}>
          
        <ProfilePhotogrid/>
          
        </Row>
      </Container>
    </div>
  );
}

export default Profile;
