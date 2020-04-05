import React, { Component } from "react";
import { Col, Row, Container } from "reactstrap";
import Header from "../header";
import RandomChar from "../randomChar";
import ItemList from "../itemList";
import CharDetails from "../charDetails";
import ErrorMessage from '../errorMessage';
import CharacterPage from '../characterPage';

export default class App extends Component {
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

  onCharSelected = (id) => {
      this.setState({
          selectedChar: id
      })
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
        </Container>
      </>
    );
  }
}
