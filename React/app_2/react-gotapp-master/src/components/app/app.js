import React, { Component } from "react";
import { Col, Row, Container } from "reactstrap";
import Header from "../header";
import RandomChar from "../randomChar";
import ItemList from "../itemList";
import CharDetails from "../charDetails";

export default class App extends Component {

  constructor() {
    super();
    this.changeShow = this.changeShow.bind(this);
  }

  state = {
    showRandomChar: true
  };

  changeShow(){
      this.setState({

        showRandomChar: !this.state.showRandomChar
      });
  }
  render() {


    return (
      <>
        <Container>
          <Header />
        </Container>
        <Container>
          <Row>
            <Col lg={{ size: 5, offset: 0 }}>
              {this.state.showRandomChar ? <RandomChar /> : ''}
              <button 
              className="btn btn-danger mb-5"
              onClick = {this.changeShow}
              >Показать скрыть</button>
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <ItemList />
            </Col>
            <Col md="6">
              <CharDetails />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
