import React from 'react';
import logo from './logo.svg';
import './App.css';

<<<<<<< HEAD
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
=======
function NameBadge(props) {
  console.log(props);
  return ( 
    <p>My name is {props.name}</p>
  )
}

class App extends React.Component {
  clickHandler(e) {
    alert("Clicked +");
    console.log(this);
    console.log(e);
  }
  render() {
  return (
    <div className="App">
      <header className="App-header">
        <div  onClick={this.clickHandler}>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p>
          Hello World 
        </p>
        <NameBadge name="John"/>
        <NameBadge name="Ana"/>
        <NameBadge name="June"/>
>>>>>>> fe277fcee38e1b953a813f52fa2d0a9fceacf0f6
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
<<<<<<< HEAD
  }
=======
}
>>>>>>> fe277fcee38e1b953a813f52fa2d0a9fceacf0f6
}

export default App;
