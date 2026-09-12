import React from 'react'
import { useState } from 'react'
const PostForm = (props) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
  return (
    <form className='flex flex-col gap-3 p-3 border-3 shadow-gray-100 border-rose-200  rounded-2xl m-5 '
     onSubmit={(e)=>{
        e.preventDefault()
        console.log(title,description);
        props.onAddPost({id:Date.now(),title,description})
    }}>
        <h2 className='text-xl font-bold text-rose-800 border-b border-rose-200 pb-2'>Create Notes</h2>
        <label htmlFor="title" className='font-bold text-red-900'>Title:</label>
        <input className='focus:outline-none border border-rose-200 focus:border-rose-500 p-2 rounded-2xl' placeholder='Enter title' type='text' value={title} onChange={(e)=>{setTitle(e.target.value)}}></input>
        <label htmlFor="description" className='font-bold text-red-900'>Description:</label>
        <textarea className='focus:outline-none border border-rose-200 focus:border-rose-500 p-2 rounded-2xl' placeholder='Enter description' type='text' value={description} onChange={(e)=>{setDescription
            (e.target.value)
        }}></textarea>
        <button className='bg-red-900 opacity-90 text-white font-bold text-lg px-3 py-2 rounded-4xl hover:opacity-75 transition-colors transform-3d' type='submit'>Add Note</button>

    </form>
    )
}

export default PostForm