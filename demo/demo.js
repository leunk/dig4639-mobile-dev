//class demon 02/10
//THIS IS NOT WORKING

class Pet{
    constructor(props){
        this.props = props;
    }
    //no need for this because we now made a function for it
    // sayName(){
    //     console.log(`My name is ${this.props.name}, I am a ${this.props.species}`);
    //     // console.log(this.props.name);
    // }
    
    //added methods to define on the super class to pass instances of each function
    getName(){
        return this.props.name;
    }
    getSpecies(){
        return this.props.species;
    }
    getSpeech(){
        return "I sound like this";
    }
    getIdentity = () => {
        console.log(this);
    }
}

class Cat extends Pet{
    constructor(props){
        //super props calls the parent prop that is inside class Pet
        super(props);
        this.props.species = "cat";
    }
    getSpeech(){
        //return "meow";
        return super.getSpeech() = "meow";
    }
}

class Dog extends Pet{
    constructor(props){
        super(props);
        this.props.species = "dog";
    }
    getSpeech(){
        //return "ruff ruff";
        return super.getSpeech() = "ruff ruff";
    }
}

function sayName(pet){
    console.log(`My name is ${pet.getName()}, I am a ${pet.getSpecies()}`);
    console.log(`${pet.getSpeech()}`);
}

var myPet = new Cat({name: "Luna"});
//var myPet = new Pet("Fido");
sayName(myPet);
myPet.getIdentity();
//assign the method getIdentity to the variable myIdentity
var myIdentity = myPet.getIdentity;
myIdentity();


var myDog = new Dog({name: "Fido"});
sayName(myDog);
myDog.getIdentity();
//var myIdentity = myPet.getIdentity;
myIdentity();
