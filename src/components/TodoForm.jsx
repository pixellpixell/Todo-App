import React, { useState } from 'react';
import { RiAddLargeFill } from "react-icons/ri";

export default function TodoForm({ addTask }) {
  
  const [task, setTask] = useState('');


  function handleAddTask(e) {
    e.preventDefault();

    if(!task) return;

    addTask(task); 
    setTask('');
  }

  return (
    <form onSubmit={handleAddTask}>
      <input 
        value={task}
        type="text"
        onChange={(e) => setTask(e.target.value)}
        placeholder="..."
        maxLength={27}
      />

      <button className='input-button'
      type="submit">
      <RiAddLargeFill /> 
      </button>
      
    </form>
    
  );
}
