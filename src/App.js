import React from 'react';
import './App.css';
import Input from "./components/input"
import TodoItem from './components/TodoItem';
import {useSelector} from "react-redux"
import {selectTodoList} from "./features/todoSlice"

function App(){
  const todoList = useSelector(selectTodoList)
  return (
    <div className="app">
      <div className="app_container">
        <div className="app_todoContainer">
          <h1>TODO's</h1>
          {
            todoList.map(item => {
              return (<TodoItem name={item.item} done={item.done} id={item.id}/>)
            })
          }
        </div>
      </div>
      <Input/>

    </div>
  );
}
export default App;