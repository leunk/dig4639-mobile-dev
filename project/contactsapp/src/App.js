import React from 'react';
import './App.css';
import Contacts from './components/Contacts/index';
import Add from './components/Contacts/add';
import Remove from './components/Contacts/remove';
import Profile from './components/Profile/index';

class App extends React.Component{
  render(){
    return(
      <div>
        <Contacts/>
        <br />
        <Add />
        <br />
        <Profile />
        <br />
        <Remove />
        <br />
      </div>
    );
  }
}

export default App;