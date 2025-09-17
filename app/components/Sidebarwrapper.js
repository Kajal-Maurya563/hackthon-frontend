"use client"
import React from 'react'
import { useState } from 'react'
import Sidebar from './Sidebar'

export default function Sidebarwrapper() {
    const [isOpen, setIsOpen] = useState(true);
    return (
        <>
            <div className="fixed top-8 left-4 z-50">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-2 bg-gray-400 rounded-md shadow-md"
                >
                    <img src="/icons/hamburger.svg" alt="menu" className="w-6 h-6" />
                </button>
            </div>
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

        </>

    )
}

