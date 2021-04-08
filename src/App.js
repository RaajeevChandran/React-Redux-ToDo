import React from 'react';
import './App.css';
import Input from "./components/input"
import TodoItem from './components/TodoItem';

const todoList = [{
  item:'todo1',
  done:false,
  id:94373848357
},{
  item:'todo2',
  done:true,
  id:94373835723
}]


function App(){
  return (
    <div className="app">
      <div className="app_container">
        <div className="app_todoContainer">
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