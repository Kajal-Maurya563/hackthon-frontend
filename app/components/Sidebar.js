"use client"
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { useState } from 'react'



function Sidebar({isOpen, setIsOpen}) {

    // const [isOpen, setIsOpen] = useState(true);
    return (
        <div className={`px-4 py-4 flex flex-col gap-4 overflow-y-auto h-full top-0 left-0 w-64 bg-neutral-300 text-black transform transition-transform duration-300 ease-in-out p-6
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>

            <div className="navbar flex justify-between relative">
                <div className="logo w-6 h-6 absolute top-1 left-1 ">
                    <img src="/icons/chatgpt.png" alt="" />
                </div>
                <div className="w-6 h-6 absolute top-1 right-1">
                    <button
                        className="focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span className="text-2xl"><img src="/icons/sidebar.svg" alt="" /></span>
                        {/* <span className="text-2xl">☰</span> */}
                    </button>
                </div>
            </div>

            <div className="option1 flex flex-col gap-5 mt-10">
                <Link href={"/"} className='flex gap-4'><img src="/icons/newChat.svg" alt="" />New</Link>
                <Link href={"/"} className='flex gap-4'><img src="/icons/newChat.svg" alt="" />Search Chat</Link>
                <Link href={"/"} className='flex gap-4'><img src="/icons/newChat.svg" alt="" />Library</Link>
            </div>

            <div className="option1 flex flex-col gap-5 mt-10">
                <Link href={"/"} className='flex gap-4'><img src="/icons/newChat.svg" alt="" />Sora</Link>
                <Link href={"/"} className='flex gap-4'><img src="/icons/newChat.svg" alt="" />GPIs</Link>
                <Link href={"/"} className='flex gap-4'><img src="/icons/newChat.svg" alt="" />Three.js Mentor</Link>
                <Link href={"/"} className='flex gap-4'><img src="/icons/newChat.svg" alt="" />Consensus</Link>
            </div>

            <div className="option1 flex flex-col gap-5 mt-10">
                <Link href={"/"} className='flex gap-4'><img src="/icons/newChat.svg" alt="" />New Project</Link>
                <Link href={"/"} className='flex gap-4'><img src="/icons/newChat.svg" alt="" />Homework</Link>
            </div>
            <div className="option1 flex flex-col gap-5 mt-10">
                <h1>Chats</h1>
                <div className="chats">

                </div>

            </div>

            <hr />
            <div className=" w-fit bottom-0 flex gap-2 justify-between items-center">
                <div className="flex items-center profile bg-violet-600 w-6 h-6 rounded-full text-white">K</div>
                <div className="name">
                    <div className=''>Kajal Maurya</div>
                    <div className='text-sm text-gray-500'>Free</div>
                </div>
                <button className='rounded-full px-2 py-2 border border-black'>Upgrade</button>
            </div>
        </div>

    )
}

export default Sidebar
