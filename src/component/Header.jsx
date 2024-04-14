import React from 'react'

function Header({setIsAdding}) {
  return (
    <div>
          <h2 className='font-bold text-[40px] text-center    '>CRUD Opration </h2>
        <button onClick={()=>setIsAdding(true)} className='rounded-sm py-2 px-5 bg-indigo-600 text-white flex items-center gap-2 mb-2 ml-3 hover:bg-opacity-90 duration-200'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
</svg>

             <span>Add New Client</span></button>
    </div>
  )
}

export default Header