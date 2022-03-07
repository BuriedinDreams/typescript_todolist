import React from 'react';
import{ TodoItem } from './model'

interface Props {
    todos: TodoItem[]; // this is the name of the interface in model.ts
    setTodos: React.Dispatch<React.SetStateAction<TodoItem[]>>;
}

const ToDoList: React.FC<Props> = ({todos, setTodos}: Props) => {
    return (
        <div className='listItems'>
        {todos.map((createdItems) => (
            <li>{createdItems.item}</li>
        ))}
        </div>
    )
}

export default ToDoList;

