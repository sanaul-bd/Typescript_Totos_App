import React from 'react'
import Todo from './Todo';
import type { TodoType } from '../types';


// type TodosType = {
//     todos:
//     {
//         id: string;
//         title: string;
//     }[];
// };


type TodosProps = {
    todos: TodoType[];
    handleDleeteTodo : (id: string) => void;
};


const Todos = (props: TodosProps) => {
    // console.log("todos ",props.todos);
    // console.log("sanaullah");

    return (
        <section className='todos'>
            {props.todos.map(todo => <Todo 
            key={todo.id} 
            todo={todo}
            handleDleeteTodo={props.handleDleeteTodo}
            ></Todo>)}

        </section>
    )
}

export default Todos