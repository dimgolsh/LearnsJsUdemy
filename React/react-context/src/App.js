import React from 'react';
import logo from './logo.svg';
import './App.css';
import Wrapper from './components/Wrapper';
import MyComponent from './components/Context';
import MyContext from './components/Context';

function App() {
  return (
    <div className="App">
      <MyContext.Provider value={{name: 'Ivam', age: 30}}>
      <Wrapper/>
      </MyContext.Provider>
    
    </div>
  );
}

export default App;
