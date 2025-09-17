import React from 'react'

function Search() {
    return (
        <div className="serachbar sticky max-w-3/4 md:min-w-3/4 flex-grow-1 bottom-5 rounded-full flex justify-between shadow-sm border border-gray-600 p-3">
            <div className='flex gap-4'>
                <img src="/icons/plus.svg" alt="" />

                <input type="text" placeholder='Ask Anything' className='border-white w-full'/>

            </div>

            <div className="flex gap-4">
                <img src="/icons/mic.svg" alt="" />
                <img src="/icons/uparrow.svg" alt="" />
            </div>
        </div>
    )
}

export default Search
