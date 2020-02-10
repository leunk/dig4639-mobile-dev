import React from 'react';
import logo from './logo.svg';
import './App.css';

function NameBadge(props){
  console.log(props);
  return <p> My name is {props.name} </p>
  
}


class App extends React.Component {
  //render must return something 
  clickHandler(){
    alert("clicked");
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
        <div OnClick = {() => alert("bork")}>
        <img src="https://bit.ly/2OIL6yx" className="App-logo" alt="logo" />
        </div>
        <p>
         I wanna go home <NameBadge/>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  }
}

export default App;
