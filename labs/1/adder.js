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
        let sentence = `<p>The sum of ${this.a} and ${this.b} is ${this.sum()}</p>`
        console.log(sentence)
    }
}
module.exports = Adder;