import React, { useRef, useState } from 'react';
import { TodoItem } from './model';
import { AiFillEdit, AiTwotoneDelete  } from 'react-icons/ai'
import { GoCheck } from 'react-icons/go'
import './styles.css'
import { useEffect } from 'react';


type Props = {
    todoItems: TodoItem,
    todos: TodoItem[],
    setTodos: React.Dispatch<React.SetStateAction<TodoItem[]>>;

}



const SingleToDoItem: React.FC<Props> = ({todoItems, todos, setTodos}: Props) => {
        // this one is going to keep track if the edit mode is on OR off.
    const [edit, setEdit] = useState<boolean>(false);
        // this one is going to keep the value of the item
    const [edited, setEdited] = useState<string>(todoItems.item);


    // This is going to compare the users clicked id to the array 
    // and if they match this function will cross out the task.
    const handleDone = (id: number) => {
        setTodos(todos.map((todos) => todoItems.id === id ? {...todoItems, completed: !todos.completed}: todoItems))
    };


    // This function is going to filter out the id of which the user clicked and delete it from the app.
    // this function is going to use filter() and take away the id of which the user clicks.
    const handleDelete = (id: number) => {
        setTodos(todos.filter((todoItems) => todoItems.id !== id ));
    };

    const handleEdit = (event:React.FormEvent, id:number) => {
        event.preventDefault();

        setTodos(
            todos.map((todoItems) => (
            todoItems.id === id ? {...todoItems, todoItems: edited } : todoItems))
            );
            setEdit(false);
    }

    const inputRef = useRef<HTMLInputElement>(null);
   
    useEffect(() => {
        inputRef.current?.focus();
    }, [setEdited]);


    return (
        <form className='singleTodo' onSubmit={(event)=>handleEdit(event, todoItems.id)} >

            { edit? (
                <input
                ref={inputRef}
                 value={edited} onChange={(event) => setEdited(event.target.value)} className='editInputBox' />
                ) : todoItems.completed ? (
                <s className='singleTodoText'>{todoItems.item}</s>
            ) : (
                <span className='singleTodoText'>{todoItems.item}</span>
                )
            }

            <div>
                <span className='icon'onClick={() => handleDone(todoItems.id)} >
                    <GoCheck/>
                </span>

                <span className='icon' 
                onClick={ () => {
                    if(!edit && !todoItems.completed) {
                        setEdit(!edit);
                    }
                    }}
                >
                    <AiFillEdit/>
                </span>

                <span className='icon' onClick={() => handleDelete(todoItems.id)} >
                <AiTwotoneDelete/>
                </span>
            </div>
        </form>
       
    );
}

export default SingleToDoItem;