import React from "react";
import MyContext from './Context';
import { Component } from "react";

class Name extends Component {
 render() {
     return (
        <div className="name">My name is {this.context.name}</div>  
     )
 }
};

Name.contextType = MyContext;
export default Name;
