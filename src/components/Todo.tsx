import React from 'react'

type TodoType = { todo: { id: string; title: string; } }

const Todo = (props: TodoType) => {
    const {id, title} = props.todo;
    return (
        <article className='todo'>
            <h3>{id}</h3>
            <p> {title}</p>
        </article>
    )
}

export default Todo