import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {contacts: []};

  }

  componentDidMount(){
    window.fetch ("http://plato.mrl.ai:8000/contacts", 
    {headers: {API: "leung"}})
    .then((res) => res.json())
    .then((data) => {
      this.setState({contacts: data.contacts});
    });
  }

  render(){
    return(
      <div>
        {
          this.state.contacts.map((value, index) => {
            return <p key = {index}>{value.name}</p>;
          })
        }
      </div>
    );
  }
}

export default App;