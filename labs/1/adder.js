class Adder{
    constructor(a,b){ 
        this.a = a;
        this.b = b;
    }
    //calling function to sum(a + b)
    sum(a,b){
        return(this.a + this.b);
    }
    render(){
        let sentence = `The sum of ${this.a} and ${this.b} is ${this.sum()}`
        console.log(sentence)
    }
}
module.exports = Adder;