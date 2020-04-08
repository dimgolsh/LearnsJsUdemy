import React, { Component } from "react";
import "./randomChar.css";
import gotService from "../../services/gotService";
import Spinner from "../spinner";
import ErrorMessage from "../errorMessage";
import PropTypes from 'prop-types';
export default class RandomChar extends Component {
  
  gotService = new gotService();

  state = {
    char: {},
    loading: true
  };

  static defaultProps = {
    interval: 15000
  }

  componentDidMount(){
    this.updateChar();
    this.timerId = setInterval(this.updateChar,this.props.interval);
  }
  componentWillUnmount(){
    console.log('die');
    clearInterval(this.timerId);
  }
  onCharLoaded = char => {
    this.setState({
      char,
      loading: false,
      error: false
    });
  };
  onError = err => {
    this.setState({
      error: true,
      loading: false
    });
  };
  updateChar =()=> {
    const id = Math.floor(Math.random() * 140 + 25);
    this.gotService
      .getCharacter(id)
      .then(this.onCharLoaded)
      .catch(this.onError);
  }
  render() {
    //console.log('re');
    const { char, loading, error } = this.state;
    const spinner = loading ? <Spinner /> : null;

    const errorMessage = error ? <ErrorMessage /> : null;

    const content = !(loading || error) ? <View char={char} /> : null;

    return (
      <div className="random-block rounded">
        {errorMessage}
        {spinner}
        {content}
      </div>
    );
  }
}

RandomChar.propTypes = {
  interval: (props,propName, componentName)=>{
    const value = props[propName];
    if(typeof value === 'number' && !isNaN(value) ){
      return null
    }
    return new TypeError(`${componentName}: ${propName} must be a number`)
  }
}

const View = ({ char }) => {
  const { name, gender, born, died, culture } = char;
  return (
    <>
      <h4>Random Character: {name}</h4>
      <ul className="list-group list-group-flush">
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Gender </span>
          <span>{gender}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Born </span>
          <span>{born}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Died </span>
          <span>{died}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Culture </span>
          <span>{culture}</span>
        </li>
      </ul>
    </>
  );
};
