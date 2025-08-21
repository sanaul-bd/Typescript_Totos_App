import React from 'react'
import Todo from './Todo';


type TodosType = {
    todos: { id: string; title: string; }[];
};


const Todos = (props: TodosType) => {
    // console.log("todos ",props.todos);
    // console.log("sanaullah");

    return (
        <section className='todos'>
            {props.todos.map(todo => <Todo key={todo.id} todo={todo}></Todo>)}
        </section>
    )
}

export default Todos