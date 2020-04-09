import React from "react";
import MyContext from './Context';

const Name = () => {
  return (
  <MyContext.Consumer>
      {
          (value) => {
              return (

                <div className="name">My name is {value}</div>                
              )
          }
      }
  </MyContext.Consumer>
  
  
  );
};

export default Name;
