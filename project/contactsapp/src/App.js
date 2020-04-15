import React from 'react';
import './App.css';
import Contacts from './components/contacts/index';
import Add from './components/contacts/add';
import Remove from './components/contacts/remove';
import Profile from './components/Profile/index';

class App extends React.Component{
  render(){
    return(
      <body>
        <div className="center">
          <Contacts/>
          <br />
          <Add />
          <br />
          <Profile />
          <br />
          <Remove />
          <br />
        </div>
      </body>
    );
  }
}

export default App;