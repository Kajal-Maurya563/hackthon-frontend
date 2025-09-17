import React from 'react'

function Navbar() {
  return (
    <div className='flex justify-between items-center p-2'>
      <div className="title flex gap-1">
        <h1 className='font-bold text-xl'>ChatGPT</h1>
        <img src="/icons/downarrow.svg" alt="" />
      </div>
      <div className="flex gap-3">
        <div className="share flex gap-1">
            <img src="/icons/upload.svg" alt="" />
            Share
        </div>
        <img src="/icons/menu.svg" alt="" />
      </div>
    </div>
  )
}

export default Navbar
