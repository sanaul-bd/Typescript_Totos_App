import React from 'react'
import type { TodoType } from '../types';
// type TodoType = {
//     todo:
//     {
//         id: string;
//         title: string;
//     }
// }


type TodoProps = {
    todo: TodoType;
    handleDleeteTodo: (id: string) => void;
};


const Todo = (props: TodoProps) => {

    // const handleDleeteTodo = (id: string) => {
    //     console.log(id);

    // }

    const { id, title } = props.todo;
    return (
        <article className='todo'>
            <h3>{id}</h3>
            <p> {title}</p>
            {/* <button onClick={() => { handleDleeteTodo(id) }}>Delete Todo</button> */}
            <button onClick={() => { props.handleDleeteTodo(id) }}>Delete Todo</button>
        </article >
    )
}

export default Todo