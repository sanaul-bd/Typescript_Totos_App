import React, { useState, type ChangeEvent, type FormEvent } from 'react'

type Props = {
    handleAddNewTodo: (newTodo: { id: number; title: string }) => void;
};


const AddTodo = (props: props) => {
    const [title, setTitle] = useState('')
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newTodo = { id: new Date().getTime().toString(), title };
        // এখানে কনসোল হইতো কিন্তু ফাংশান করে আমরা এখান থেকে ভ্যালু উপরের কম্পোনেন্ট এ পাঠিয়ে দিলাম। 
        props.handleAddNewTodo(newTodo);
        setTitle('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-input">
                <label className='title-class' htmlFor="title">Todo Title </label>
                <input className='title-input' type="text" value={title} onChange={handleChange} required autoFocus name='title' />

                <button className='titleBtn' type='submit'>Add Todo</button>
            </div>
        </form>
    )
}

export default AddTodo