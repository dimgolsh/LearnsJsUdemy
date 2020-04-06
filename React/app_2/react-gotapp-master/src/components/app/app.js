import React, { Component } from "react";
import { Col, Row, Container } from "reactstrap";
import Header from "../header";
import RandomChar from "../randomChar";
import ErrorMessage from '../errorMessage';
import CharacterPage from '../characterPage';
import ItemList from '../itemList';
import CharDetails from "../charDetails";
import GotService from '../../services/gotService';

export default class App extends Component {
  gotService = new GotService();
  constructor() {
    super();
    this.changeShow = this.changeShow.bind(this);
  }

  state = {
    showRandomChar: true,
    selectetChar: 130,
    error:false
  };

  componentDidCatch(){
      console.log('error');
      this.setState({
          error: true
      })
  }
  changeShow() {
    this.setState(state => {
      return {
        showRandomChar: !state.showRandomChar
      };
    });
  }

 
  
  render() {
      if(this.state.error){
          return <ErrorMessage/>
      }
    return (
      <>
        <Container>
          <Header />
        </Container>
        <Container>
          <Row>
            <Col lg={{ size: 5, offset: 0 }}>
              {this.state.showRandomChar ? <RandomChar /> : ""}
              <button className="btn btn-danger mb-5" onClick={this.changeShow}>
                Показать скрыть
              </button>
            </Col>
          </Row>
         <CharacterPage/>
         
         <Row>
            <Col md="6">
              <ItemList
              onCharSelected = {this.onCharSelected}
              getData = {this.gotService.getAllBooks}
              renderItem = {(item) => (<><span>{item.name}</span><button className="btn btn-info">CLickme</button></>)}
              />
            </Col>
            <Col md="6">
              <CharDetails charId = {this.state.selectedChar} />
            </Col>
          </Row>
          {/* <Row>
            <Col md="6">
              <ItemList
              onCharSelected = {this.onCharSelected}
              getData = {this.gotService.getAllHouses}
              />
            </Col>
            <Col md="6">
              <CharDetails charId = {this.state.selectedChar} />
            </Col>
          </Row> */}
        </Container>
      </>
    );
  }
}
