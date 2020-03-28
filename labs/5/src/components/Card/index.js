import React from 'react';
import Weather from '../Weather/index.js';

//from module Native: Working with Input
class Card extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            periods : []
        }
    }

    componentDidMount(){
        fetch('https://api.weather.gov/gridpoints/MLB/25,69/forecast')
        .then(res => res.json())
        .then((result) => {
            //let periods = result.properties.periods;

            this.setState({
                periods: result.properties.periods
            });
        })
        //.catch((error) => {console.log(error)});
    }

    render(){
        //from example wk 
        return(
            <>
            {this.state.periods
            .map((v) => <Weather key = {v.number}
            name = {v.name}
            temperature = {v.temperature}
            temperatureUnit = {v.temperatureUnit}
            detailedForecast = {v.detailedForecast}
            />)}
            </>

                //did not work
            // <View>
            //     {
            //         this.state.periods.map((value, index) => {
            //             return <View key={index}>
            //                 <Text>Temperature {value.temperature}{value.temperatureUnit}</Text>
            //                 <Text>{value.detailedForecast}</Text>
            //             </View>
            //         })
            //     }
            // </View>
        )
    }
}

export default Card;