import React from "react";
import PhotoCard from "./PhotoCard";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/photo-grid.css";
import "../styles/bookmarks.css";
// import textObj from "./cardInfo";
import { textObjContext } from "../App.js";

function Bookmarks() {
  //   console.log(textObj);
  //   let [textObjState, settextObjState] = React.useState(textObj);
  //   console.log(textObjState)
  console.log(textObjContext);

  let textObj = React.useContext(textObjContext);

  function createCard(textObj) {
    return (
      <Col sm={2}>
        <PhotoCard
          cardId={textObj.id}
          text={textObj.description.substring(0, 200)}
          imgUrl={textObj.imgUrl}
          title={textObj.title}
        />
      </Col>
    );
  }

  function checkBookmark() {
    let bookmarkArr = []
    textObj.textObj.forEach((Element) => {
      if (Element.bookmark != false) {
          console.log(Element.bookmark)
        bookmarkArr.push(Element);
      }
    });
    console.log(bookmarkArr)
    return bookmarkArr
  }

  console.log(checkBookmark());

  return (
    <div>
      <div id="rowAlign">
        <Row>
          <Col sm={2}>
            <div id="profileContent">
              <h1>Saved</h1>
              <p>Only you can see what you've saved</p>
            </div>
          </Col>
        </Row>
        <Row sm={1} md={1} lg={2} xl={3}>
          {/* <Col sm={9}> */}
          {checkBookmark().map(createCard)}
        </Row>
      </div>
    </div>
  );
}

export default Bookmarks;
