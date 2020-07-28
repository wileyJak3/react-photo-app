import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PhotoAppNavbar from "./components/PhotoAppNavbar";
import PhotoAppNavbar2 from "./components/PhotoAppNavbar2";

import Card from "react-bootstrap/Card";

import "./App.css";
import PhotoCard from "./components/PhotoCard";
import Photogrid from "./components/Photogrid";
import textObj from "./components/cardInfo";
import Profile from "./components/Profile";




import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Bookmarks from "./components/Bookmarks";

console.log(textObj);


export let textObjContext = React.createContext({ textObj });
export let loginStatus = React.createContext( false );
console.log(loginStatus);
console.log(textObjContext);

function App() {
  // const theme = React.useContext(textObjContext)
  let textObjContext = React.createContext({ textObj });

  return (
    <div className="App">
      {/* //* The container "fluid" size is the size at which the container elements are resize to create spacing, until  will remain normal size (i believe?) */}
      <Container fluid>
        {/* //*Numbers don't matter just the columns and rows, number inside the arrows are merely used to identify the cells. Grid won't show if nothing inside columns */}
        <Row fluid>
          <Col>
            <Router>
              <PhotoAppNavbar />
              {/* <PhotoCard/> */}
              {/* <textObjContext.Provider value= {textObj}> 
            <Photogrid/>
            </textObjContext.Provider> */}
              {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
             
              <Switch>
                <Route exact path="/" component = {
                  //  <textObjContext.Provider value={textObj}>
                  Photogrid
                  // </textObjContext.Provider>
                  }>
                  
                  
                
                </Route>
                <Route path="/bookmarks" component = {Bookmarks}/>
                <Route path="/profile" component = {Profile}/>
              </Switch>
            </Router>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
