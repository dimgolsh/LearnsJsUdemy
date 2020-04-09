import React from "react";
import {connect} from 'react-redux';
import * as actions from '../actions';
import {bindActionCreators} from 'redux';

const Counter = ({counter,inc,dec,rnd}) => {
  return (
    <div  className="jumbotron">
      <h1 id="counter">{counter}</h1>
      <button onClick={dec} className="btn btn-primary">
        Dec
      </button>
      <button onClick={inc} className="btn btn-primary">
        inc
      </button>
      <button onClick={rnd} className="btn btn-primary">
        rnd
      </button>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    counter:state
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
