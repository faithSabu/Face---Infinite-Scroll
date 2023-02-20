import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar() {
    const user = localStorage.getItem('user')
    const navigate = useNavigate()
    return (
        <>
            <div className=' fixed top-0 h-12 w-full text-white flex justify-between items-center px-5 z-50 navbar'>
                <span className='text-lg font-semibold'>Home</span>
                <div className='flex gap-6 items-center'>
                    <span>Welcome {user}</span>
                    <span className='border px-2 py-1 rounded-lg bg-blue-600 hover:bg-blue-700 cursor-pointer' onClick={() => {
                        localStorage.clear()
                        navigate('/login')
                    }}>Logout</span>
                </div>
            </div>
        </>
    )
}

export default Navbar