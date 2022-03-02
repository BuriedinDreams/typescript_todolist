import React, { useState } from 'react';
import './App.css';
import InputField from './comp/InputField'
import { TodoItem } from './comp/model';



const App: React.FC = () => {
  
  const [info, setInfo] = useState<string>("")
  const [todos, setTodos] = useState<TodoItem[]>([]);

  const handleAdd = (event: React.FormEvent) => {
    event.preventDefault();
  
    if (info) {
      setTodos([...todos, { id:Date.now(), item: info, completed: false }])
      setInfo('');
    } 
    
  };
  
  console.log(info);
  console.log(todos);
  
  

  return (
    <div className='App'>
      <span className='heading'>Reminder App</span>
      <InputField todo= {info} setTodo={setInfo} handleAdd={handleAdd} />

    </div>
  );
};

export default App;
