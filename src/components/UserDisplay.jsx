import React, { useRef, useState, useCallback } from 'react'
import useUserSearch from '../hooks/useUserSearch'
import SkeletonLoader from './SkeletonLoader'
import UserCard from './UserCard'

function UserDisplay() {

    const [pageNumber, setPageNumber] = useState(1)
    const { loading, error, users, hasMore } = useUserSearch(pageNumber)
    
    const observer = useRef()
    const lastUserElementRef = useCallback(node => {
        if (loading) return
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                setPageNumber(prevPageNumber => prevPageNumber + 1)
                console.log('visible');
            }
        })
        if (node) observer.current.observe(node)
    }, [loading, hasMore])

    return (
        <div className='pt-16 px-7 min-h-[100vh] bgHome'>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 justify-center gridWrapper'>
                {users.map((user, index) => {
                    if (users.length === index + 1) {
                        return <div>
                            {loading ?
                                <SkeletonLoader />
                                :
                                <div key={user.login.uuid} ref={lastUserElementRef}>
                                    <UserCard user={user} />
                                </div>}
                        </div>
                    } else {
                        return <div>
                            {loading ?
                                <SkeletonLoader />
                                :
                                <div key={user.login.uuid} >
                                    <UserCard user={user} />
                                </div>}
                        </div>
                    }
                })}
            </div>
            <div>{error &&
                <span className='text-red-600'>Something Went Wrong. Please try again</span>
            }</div>
        </div>
    )
}

export default UserDisplay
