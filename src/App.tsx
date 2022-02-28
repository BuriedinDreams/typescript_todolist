import React, { useState } from 'react';
import './App.css';
import InputField from './comp/InputField'
import { TodoItem } from './comp/model';



const App: React.FC = () => {
  
  const [info, setInfo] = useState<string>("")
  const [todo, setTodo] = useState<TodoItem[]>([])

  const handleAdd = (event: React.FormEvent) => {
    event.preventDefault();
  }
  
  console.log(info);
  

  return (
    <div className='App'>
      <span className='heading'>Reminder App</span>
      <InputField todo= {info} setTodo={setInfo} handleAdd={handleAdd} />

    </div>
  );
};

export default App;
