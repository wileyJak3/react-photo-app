import React from "react";
import PhotoCard from "./PhotoCard";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/profile-photo-grid.css";
// import textObj from "./cardInfo";
// import { textObjContext } from '../App.js';
import profileCardInfo from './profileCardInfo'

function ProfilePhotogrid() {
  //   console.log(textObj);
//   let [textObjState, settextObjState] = React.useState(textObj);
//   console.log(textObjState)


let textObj = profileCardInfo


  function createCard(textObj) {
    return (
     
      <Col sm={9}>
        <PhotoCard
          profile = {true}
          cardId = {textObj.id}
          text={textObj.description.substring(0, 180)}
          imgUrl={textObj.imgUrl}
          title={textObj.title}
        />
      </Col>
      
    );
  }




  return (
    <div>
      <div id="rowAlign">
      <div id ="photoGrid2Card">
        <Row sm={1} md={1} lg={2} xl={3}>
          {/* <Col sm={9}> */}
         
          {textObj.map(createCard)}
          {/* <PhotoCard imgUrl="https://images.unsplash.com/photo-1595495529320-dd1f14f6b907?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80" /> */}
          {/* </Col> */}
          {/* <Col sm={9}>
              <PhotoCard imgUrl="https://images.unsplash.com/photo-1595495529320-dd1f14f6b907?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80" />
            </Col>
            <Col sm={9}>
              <PhotoCard imgUrl="https://images.unsplash.com/photo-1595495529320-dd1f14f6b907?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80" />
            </Col>
            <Col sm={9}>
              <PhotoCard imgUrl="https://images.unsplash.com/photo-1595495529320-dd1f14f6b907?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80" />
            </Col> */}
        </Row>
        </div>
      </div>
    </div>
  );
}

export default ProfilePhotogrid;
