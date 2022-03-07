import React from 'react';
import { TodoItem } from './model';
import { AiFillEdit, AiTwotoneDelete  } from 'react-icons/ai'
import { GoCheck } from 'react-icons/go'
import './styles.css'


type Props = {
    todoItems: TodoItem,
    todos: TodoItem[],
    setTodos: React.Dispatch<React.SetStateAction<TodoItem[]>>;

}


const SingleToDoItem: React.FC<Props> = ({todoItems, todos, setTodos}: Props) => {
    return (
        <form className='singleTodo' >
            <span className='singleTodoText'>{todoItems.item}</span>
            
            <div>
                <span className='edit' >
                    <AiFillEdit/>
                </span>

                <span className='completed' >
                    <GoCheck/>
                </span>

                <span className='delete' >
                <AiTwotoneDelete/>
                </span>
            </div>
        </form>
       
    );
}

export default SingleToDoItem;