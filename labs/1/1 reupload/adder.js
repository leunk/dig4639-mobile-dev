class Adder{
    constructor(props){
       this.props= props;
    }
    sum(){
        //sum(a,b){
        //  return(this.a + this.b);
        //}
        let suma = (this.props.a + this.props.b);
        return suma;
    }
    render(){
        return `<p>The sum of ${this.props.a} and ${this.props.b} is ${this.sum()}</p>`;
    }
}
module.exports = Adder; 
