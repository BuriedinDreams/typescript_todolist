import React from 'react';
import { TodoItem } from './model';
import { AiFillEdit, AiTwotoneDelete  } from 'react-icons/ai'
import { GoCheck } from 'react-icons/go'


type Props = {
    todoItems: TodoItem,
    todos: TodoItem[],
    setTodos: React.Dispatch<React.SetStateAction<TodoItem[]>>;

}


const SingleToDoItem: React.FC<Props> = ({todoItems, todos, setTodos}: Props) => {
    return (
        <form className='SingleTodo' >
            <span className='SingleTodoText'>{todoItems.item}</span>
            
            <div>
                <span className='edit' >
                    <AiFillEdit/>
                </span>

                <span className='completed' >
                    <GoCheck/>
                </span>

                <span className='Delete' >
                <AiTwotoneDelete/>
                </span>
            </div>
        </form>
       
    );
}

export default SingleToDoItem;