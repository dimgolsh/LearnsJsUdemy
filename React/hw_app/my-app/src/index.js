import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/app";
/*
<React.fragment>

</React.fragment>
*/
class WhoAmI extends Component{
  constructor(props){
    super(props);
  }
  render(){
    const { name, surname, link } = this.props;
    return (
      <>
        <h1>
          My {name} ,{surname}
        </h1>
        <a href={link}>My profile</a>
      </>
    );
  }
}
function WhoAmI({ name, surname, link }) {
  return (
    <>
      <h1>
        My {name} ,{surname}
      </h1>
      <a href={link}>My profile</a>
    </>
  );
}
const All = () => {
  return (
    <>
      <WhoAmI name="Jonhn" surname="Faceeve" />
      <WhoAmI name="Ivan" surname="Vk" />
      <WhoAmI name="Alex" surname="Faceeve" />
    </>
  );
};
ReactDOM.render(
  <React.StrictMode>
    <All/>
  </React.StrictMode>,
  document.getElementById("root")
);
