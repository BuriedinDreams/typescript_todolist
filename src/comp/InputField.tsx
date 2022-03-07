import React, { useRef } from 'react';
import './styles.css'

interface TextBoxProps {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (event: React.FormEvent) => void;
}

const InputField: React.FC<TextBoxProps> = ({ todo, setTodo, handleAdd }: TextBoxProps ) => {
    // 
    const inputRef = useRef<HTMLInputElement>(null) // useRef is very similar to state in that store previous value in it and it persists between different renders but does not cause you to re-render like state does.

    
    return(
        <form className='inputForm' onSubmit={(event) => {
            handleAdd(event);
            inputRef.current?.blur();
            }}>
            <input
            ref={inputRef}
            type="text" 
            value={todo} onChange={(e) => setTodo(e.target.value)}
            placeholder='Create a task' className='inputTextBox' />
            <button className='inputSubmit' type='submit' >Enter</button>

        </form>
    )
};


export default InputField