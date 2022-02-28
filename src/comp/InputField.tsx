import React from 'react';
import './styles.css'

interface TextBoxProps {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (event: React.FormEvent) => void;
}

const inputField: React.FC<TextBoxProps> = ({ todo, setTodo, handleAdd }: TextBoxProps ) => {
    return(
        <form className='inputForm' onSubmit={handleAdd}>
            <input type="text" 
            value={todo} onChange={(e) => setTodo(e.target.value)}
            placeholder='Enter a task' className='inputTextBox' />
            <button className='inputSubmit' type='submit' >Enter</button>

        </form>
    )
};


export default inputField