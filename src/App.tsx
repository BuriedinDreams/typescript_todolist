import React, { useState } from 'react';
import './App.css';
import InputField from './comp/InputField';



const App: React.FC = () => {

  const [todo, setTodo] = useState("")


  return (
    <div className='App'>
      <span className='heading'>Reminder App</span>
      <InputField />

    </div>
  );
};

export default App;
