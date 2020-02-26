import React from 'react';
import logo from './logo.svg';
import './App.css';
import todoList from './todoList.json';

// const todoList = [
// {
//   content: 'Task 1', priority: 2, completed:true
// },
// {
//   content: 'Task 2', priority: 1, completed: true
// },
// {
//   content: 'Task 3', priority: 3, completed: false
// }
// ]

function TodoItem(props){
  // return <p>{props.content}</p>
  return <p className="card">{props.content}</p>
}

class TodoList extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      todoList,
      hideCompletedItems: false
    }
    this.currentId = 4;
  }

  addTask(e){
    console.log(this.refs.taskContent)
    let todoList = this.state.todoList
    todoList.push(
      {"id": this.currentId, "completed": true, "priority": 1, "content": "Task 1" + this.currentId++})
      this.currentId++
      this.setState({todoList:todoList})
  }

  render(){
    return(
      <>
      {/* <input type="checkbox" id="vehicle1" name="vehicule1" value="bike" />
      <label for="vehicle1">I have a bike</label><br></br>  */}

      <input type="text" ref="taskContent" />
      <input type="button" value="Add task" onClick={(e) => this.addTask(e)} />

      <br/>

      <input ref="hideCompletedItemsCheckbox" type="checkbox" id="hideCompletedItems"
      name="hideCompletedItems" value="hideCompletedItems" onChange= { (e) => console.log(e.target.checked)} />

      <label htmlFor ="hideCompletedItems">I have a bike</label> <br></br>

      {((this.state.hideCompletedItems) ? todoList
      .filter((v) => !v.completed) :todoList)
      .map((v) => <TodoItem key={v.id} content={v.content}
      priority={v.priority}
      completed={v.completed} />)}
      </>)
  }
}

{/*     
      {todoList.filter((v) => !v.completed)
      .map((v) => <TodoItem content ={v.content}
      priority = {v.priority}
      completed = {v.completed} />)}
    </>) */}
  


function App(props){
  return(
    <TodoList />
  )
}

export default App;
