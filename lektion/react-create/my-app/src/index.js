import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import App from './App';
//import * as serviceWorker from './serviceWorker';

const elem = (
  <div>
    <h2>Hrlll eorlkd</h2>
    <input
      type="text"
      placeholder="ff"
      autoComplete=""
      className="fitst"
      htmlFor=""
    />
    <button />
  </div>
);

const Header = () => {
  const scr = "";
  return <h2>Heell {scr}</h2>;
};

const Field = () => {
  const holder = "enter here";
  const styleField = {
    with: "300px"
  };
  return (
    <input
      style={styleField}
      type="text"
      placeholder={holder}
      autoComplete=""
      className="fitst"
      htmlFor=""
    />
  );
};

const Btn = () => {
  const text = "Log in";
  const logged = true;
  const res = () => {
    return "login please";
  };
  const p = <p>Login </p>;

  return <button>{logged ? null : text}</button>;
};

const App = () => {
  return (
    <div>
      <Header />
      <Field></Field>
      <Btn></Btn>
    </div>
  );
};
//const elem = React.createElement('h2', null, 'Hello world')
ReactDOM.render(<App />, document.getElementById("root"));
