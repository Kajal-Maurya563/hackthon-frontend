import React from 'react'

function ChatCards() {
  return (
    <div className='flex flex-col gap-10'>
      <div className="questions right-0 rounded-full px-3 py-3 bg-gray-600">Hello</div>
      <div className="response mt-5 ">Hello,how can i help you</div>
      <div className="icons flex gap-4">
        <img className='w-6 h-6' src="/icons/upload.svg" alt="" />
        <img className='w-6 h-6' src="/icons/upload.svg" alt="" />
        <img className='w-6 h-6' src="/icons/upload.svg" alt="" />
        <img className='w-6 h-6' src="/icons/menu.svg" alt="" />
      </div>
    </div>
  )
}

export default ChatCards
