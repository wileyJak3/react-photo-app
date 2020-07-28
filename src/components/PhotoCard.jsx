import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { textObjContext } from '../App.js';



function PhotoCard(props) {
    let textObj = React.useContext(textObjContext)
    console.log(textObj.textObj)
  

    function setBookmark(){
        console.log("hello")
        console.log(textObj)
        // console.log(textObj.textObj[props.cardId].bookmark)
        textObj.textObj[props.cardId].bookmark = true
    }
  return (
    <div>
          {console.log(textObj)}
      <Card style={{ display:"flex",flexDirection:"column", width: "29rem"}}>
        <Card.Img variant="top" src={props.imgUrl} />        
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <div id = "cardText">
          <Card.Text>
            {props.text}
          </Card.Text>
          </div>
          
        </Card.Body>
        <textObjContext.Provider value={textObj}>
        {(props.profile == true)? null:<Button onClick={setBookmark}  variant="outline-dark">Bookmark</Button>}
        </textObjContext.Provider>
      </Card>
    </div>
  );
}

export default PhotoCard;
