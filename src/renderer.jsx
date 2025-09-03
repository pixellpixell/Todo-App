import './components/styles/main.css';
import TodoForm from './components/TodoForm.jsx';
import TodoContainer from './components/TaskContainer.jsx';
import Hamburger from './components/Hamburger.jsx';
import DateComponent from './components/DateComponent.jsx';
import { createRoot } from 'react-dom/client';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [message, setMessage] = useState(""); 

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todoList'));
    if (storedTodos) {
      setTodoList(storedTodos);
    }
}, []);

useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
}, [todoList]);



  const praises = [
    "Well done!",
    "Great job!",
    "You rock!",
    "Keep it up!",
    "Good job!",
    "Excellent!"
  ];


 const handleDone = (id) => {
  setMessage(praises[Math.floor(Math.random() * praises.length)])
  
  deleteTask(id);

  setTimeout(() => {
    setMessage("");
  }, 2700);
};
 

  function addTask(taskName){
    setTodoList(prev => [{ id: uuidv4(), taskName }, ...prev]);
  }


  function deleteTask(id) {
  setTodoList((todoList) => todoList.filter(task => task.id !== id)); 
}


  return (
    <div>
      <div className="app__background">

        <div className='app__menu'>
        <DateComponent/>
        <p>{message}</p>
        <Hamburger/>
        </div>
        <h4>What are you doing today?</h4>

        <TodoForm addTask={addTask} />

        <div className='content'>
          <ul className='list-item'>
            {todoList.map((item) => (
              <TodoContainer 
              key={item.id} 
                item={item} 
                deleteTask={deleteTask} 
                handleDone={handleDone}  
              />

            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

const container = document.getElementById('root')
const root = createRoot(container)
root.render (<App/>)
