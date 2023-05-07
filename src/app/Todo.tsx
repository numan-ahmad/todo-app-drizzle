'use client';
import { useState } from 'react';
type todo = {
  tittle: string;
  description: string;
};
export const TodoUI = () => {
  const [todo, setTodo] = useState({
    title: '',
    description: '',
  });

  const onChange = (e: any) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };

  const onClickAdd = async () => {
    const respons = await fetch('api/todo', {
      method: 'POST',
      body: JSON.stringify(todo),
    });
  };
  return (
    <div className='flex flex-col justify-center py-2'>
      <input
        className='p-3 mb-5'
        name='title'
        placeholder='Title'
        value={todo.title}
        onChange={onChange}
      />
      <textarea
        className='p-3 mb-5'
        name='description'
        placeholder='Description'
        value={todo.description}
        onChange={onChange}
      />
      <button className='bg-green-700 rounded-full p-3' onClick={onClickAdd}>
        Add Todo
      </button>
    </div>
  );
};
