import React from 'react'
import { useState } from 'react'
const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
        <nav className='bg-rose-50 text-rose-900 border-b border-rose-100 flex justify-between items-center p-3 gap-3'>

            <h1 className='text-xl font-bold'>Notes App</h1>

            <ul className='flex space-x-4 hidden md:flex'>
                <li><a href="#" className='hover:text-rose-600 cursor-pointer transition-colors'>Home</a></li>
                <li><a href="#" className='hover:text-rose-600 cursor-pointer transition-colors'>About</a></li>
                <li><a href="#" className='hover:text-rose-600 cursor-pointer transition-colors'>Contact</a></li>
            </ul>
            <input type="text" placeholder='Search...' className='border border-rose-200 rounded px-2 py-1 outline-rose-200 focus:ring-2 focus:ring-rose-500 hidden md:flex' />
            <div className="circle w-10 h-10 bg-rose-300 rounded-full border border-rose-400 text-center flex justify-center items-center hidden md:flex">N</div>
            <i className="fa-solid fa-bars md:hidden!" onClick={() => { setIsOpen(!isOpen) }}></i>

        </nav>
             {  isOpen &&    ( <ul className='flex flex-col md:hidden justify-center
             items-center gap-3 bg-rose-100 text-rose-900 border-b border-rose-100 p-3 '>
                <li><a href="" className='hover:text-rose-600 cursor-pointer transition-colors'>Home</a></li>
                <li><a href="" className='hover:text-rose-600 cursor-pointer transition-colors'>About</a></li>
                <li><a href="" className='hover:text-rose-600 cursor-pointer transition-colors'>Contact</a></li>
                <input type="text" placeholder='Search...' className='border border-rose-400 rounded px-2 py-1 outline-rose-300 focus:ring-2 focus:ring-rose-500' />
                <div className="circle w-10 h-10 bg-rose-300 rounded-full border border-rose-400 text-center flex justify-center items-center">N</div>
            </ul>)}
            </>
    )
}

export default Navbar