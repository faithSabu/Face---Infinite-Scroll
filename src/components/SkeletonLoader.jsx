import React from 'react'

function SkeletonLoader() {
    return (
        <>
            <div className="min-w-[240px] w-[1fr] md:w-[1fr] h-[400px] rounded shadow-lg bg-white flex flex-col gap-2 py-5 overflow-hidden items-center">
                <div className='skeleton bg-white h-[300px] w-[85%] flex justify-center items-center'>
                    <div className="flex justify-center items-center">
                        <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                            <span className="visually-hidden font-extrabold">.</span>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-2 w-[85%]'>
                    <div className='w-[75%] h-[20px] skeleton'> </div>
                    <div className='w-[65%] h-[20px] skeleton'> </div>
                </div>
            </div>
        </>
    )
}

export default SkeletonLoader