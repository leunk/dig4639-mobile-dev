import React from 'react';
import {StyleSheet, Text, Button, View, TouchableOpacity} from 'react-native';
//import {Header} from 'react-native-elements';
import questions from "./questions.json";

//refer to ICE-10 Kahoot 
const TIME_LIMIT = 5
const TITLE_STATE = 0
const QUESTION_STATE = 1
const FINAL_STATE = 2

function StartButton(props)  {
  return <TouchableOpacity onPress={props.onPress}
    style={styles.start}>
      <View style={styles.buttonView}>
    <Text style={styles.buttonText}>{props.title}</Text>
      </View>
    </TouchableOpacity>
}

class QuizQuestion extends React.Component{
  render(){
    return<>
    {/* //changed from ICE10 to reflect react-native elem */}
    <Text>{this.props.question}</Text>
    {this.props.answers.map((v,i) => 
    <Button color = "#2b4bd9" title = {v.text} onPress = {() => this.props.nextQuestion(v.correct)} key = {i} 
    value = {v.text} />)}
    </>
  }
}

class TitlePage extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      score : 0,
      titleText: "Test Your Knowledge",
      counter : 0,
      currentState: TITLE_STATE,
      currentQuestion: 0
    }
    this.timeLimit = TIME_LIMIT
  }
  nextQuestion(correct){
    console.log("BUTTOM PRESSED")
    
    if(correct){
      this.setState({score: this.state.score + 1})
    }
    
    if(this.state.currentQuestion == questions.length - 1) {
      console.log("DONE")
      this.setState({
        currentState: FINAL_STATE
      })
    }
    else{
      clearInterval(this.timer)
      console.log(this.state.currentQuestion)
      this.setState({
        titleText : "You answers X",
        currentState : QUESTION_STATE,
        currentQuestion : this.state.currentQuestion + 1
        
      })
    }
  }

  countdown(){
    console.log("Handling Interval")
    console.log(this.state.counter)

    if(this.state.counter < this.timeLimit){
      this.setState({
        titleText : 'Starting the Quiz!',
        counter : this.state.counter + 1
      })
    }
    
    else{
      this.setState({
        titleText: "Beginning Quiz!",
        currentState: QUESTION_STATE,
        counter: 0
      })
      
      if(this.state.currentState == TITLE_STATE){
        this.timer = setInterval(() => this.countdown(), 1000)
        clearInterval(this.timer)
      }

      else{
        this.setState({titleText: "You answered!"})
      }
    }
  }

  start(){
    console.log("Starting!!")
    this.setState({titleText: "Starting the Quiz!!", counter: 0})
    this.timer = setInterval(() => this.countdown(), 1000)
  }

  render(){
    return(
      <>
      <Text>{this.timeLimit - this.state.counter}</Text>
      {((this.state.currentState === TITLE_STATE) 
        ? <>
        <Text>{this.state.titleText}</Text>
        <StartButton color = "#2b4bd9" title = "Start" onPress = {() => this.start()} />
        </>
        : (this.state.currentState === FINAL_STATE)
        ? <Text>Done! Score: {this.state.score}</Text>
        : <QuizQuestion
            answers={questions[this.state.currentQuestion].possibleAnswers} 
            question={questions[this.state.currentQuestion].question} 
            nextQuestion={(correct) => this.nextQuestion(correct)} />
      )}
      <Text style={styles.scores}>Score: {this.state.score} </Text>
      </>
    )
  }
}

class App extends React.Component{
  render(){
    return(
      <View style = {styles.page}>
  
        <Text style = {styles.quest}>React Questions</Text>
        <TitlePage>Test Your Knowledge</TitlePage>
        {/* <Header>
          {{text: 'Test Your Knowledge' , style: {color: '#fff'}}}
        </Header> */}
  
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  buttonView: {
    backgroundColor: "#2b4bd9",
    padding:10,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 15,
  },
  start: {
    alignItems: "center",
    
  },
  page: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    backgroundColor: "#edf0ff",
    justifyContent: "center",
    padding: 10,
  },
  quest: {
    color: "#1a1d30",
    fontSize: 40,
    padding: 10,
    margin: 10
  },
  scores: {
    color: "#460578",
    fontSize: 20,
    padding: 10
    // textShadowColor: 'rgba(0, 0, 0, 0.75)',
    // textShadowOffset: {width: -1, height: 1},
    // textShadowRadius: 5
  }

})
