import React from "react";
import PhotoCard from "./PhotoCard";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/photo-grid.css";
// import textObj from "./cardInfo";
import { textObjContext } from '../App.js';

function Photogrid() {
  //   console.log(textObj);
//   let [textObjState, settextObjState] = React.useState(textObj);
//   console.log(textObjState)
  console.log(textObjContext)

let textObj = React.useContext(textObjContext)


  function createCard(textObj) {
    return (
      <Col >
        <PhotoCard
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
        <Row xs={1} sm={1} md={1} lg={2} xl={3}>
          {/* <Col sm={9}> */}
          {textObj.textObj.map(createCard)}
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
  );
}

export default Photogrid;
