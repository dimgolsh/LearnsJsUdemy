import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/app";
/*
<React.fragment>

</React.fragment>
*/
class WhoAmI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 26
    };
    //способ1
    //this.nextYear = this.nextYear.bind(this);
    
    //способ2
    this.nextYear = () => {
      this.setState(state => ({
        years: ++state.years
      }))
    };
  }

  /* cпособ 3
  state = {
    years: 26
  };
  nextYear = () => {
    this.setState(state => ({
      years: ++state.years
    }))
  }
*/

  /* способ1
  nextYear(){
    //this.state.years++
    this.setState(state=> ({
      years: ++state.years
    }))
  }*/
  render() {
    const { name, surname, link } = this.props;
    const {years} = this.state;
    return (
      <>
        <button onClick={this.nextYear}>++</button>
        <h1>My {name} ,{surname}, years ={years}</h1>
        <a href={link}>My profile</a>
      </>
    );
  }
}

const All = () => {
  return (
    <>
      <WhoAmI name="Jonhn" surname="Faceeve" />
      <WhoAmI name="Ivan" surname="Vk" />
      <WhoAmI name="Alex" surname="Faceeve" />
    </>
  );
}
ReactDOM.render(
    <All/>,document.getElementById("root")
);
