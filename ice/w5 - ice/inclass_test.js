class User{
    //instead of defining username inside of class. We will define username inside of constructor to make it easier
    //userName = "Kat";
    constructor(props){
        this.props = props;
        // this.userName = input;
        // this.input2 = input2;
        // this.input3 = input3;
    }
    printName(){
        //doesnt require keyword function. system already knows what to do
        console.log(`${this.props.userName}, id is ${this.props.id}`);
    }
}

var myUser = new User({userName:"Kat"});
myUser.printName();
var myUser2 = new User({userName: "Jas"});
myUser2.printName();
var myUser3 = new User({userName: "Sam"});
myUser3.printName();

var myUser = new User();
myUser.printName();

function myFunction(){
    return this;
}
var obLiteral = {
    a: 5,
    b: 6,
    c: myFunction
}
// console.log(obLiteral.c());
// console.log(myFunction());

