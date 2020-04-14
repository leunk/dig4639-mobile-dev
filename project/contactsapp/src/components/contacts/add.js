import React from 'react';

//var for insomnia server/database stuff
const HEADERS = {
    "Method" : "GET",
    "headers": {
        "API": "leung",
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
}

class Add extends React.Component{
    constructor(props){
        super(props);
        //createRef 
        this.nameRef = React.createRef();
        this.numberRef = React.createRef();
        this.onSubmit = props.onSubmit;
    }

    getInput = (event) => {
        let newHeaders = {...HEADERS,
            "method" : "POST",
            body: JSON.stringify({
                name: this.nameRef.current.value,
                number: this.numberRef.current.value
            })
        }
        event.preventDefault();
        fetch("http://plato.mrl.ai:8080/contacts/add", newHeaders)
        .then((res) => res.json())
        .then((data) => {
            this.setState({value: this.nameRef.current.value})
            this.setState({value: this.numberRef.current.value})
            console.log(data)
        }, 
        [])
    }

    render(){
        return(
            <div>
                <h2>Add</h2>
                <form onSubmit = {this.getInput}>
                    <label className = "name">Name</label><br />
                    <input type = "text" ref = {this.nameRef} placeholder = "Enter name..." />
                    <br />
                    <br />
                    <label className = "name">Number</label><br />
                    <input type = "number" ref = {this.numberRef} placeholder = "Enter number..."  />
                    <br /> <br />
                    <button>Add Contact</button>
                </form>
            </div>
        );
    }
}

export default Add;