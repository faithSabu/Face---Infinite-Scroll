import React from 'react'

function UserCard(props) {
    const { user } = props
    return (
        <>
            <div className="max-w-[350px] rounded-md shadow-lg bg-gray-200 gridContent sm:justify-self-center h-max">
                <div className='rounded-2xl'>
                    <img className="w-full p-5 rounded-lg" src={user.picture.large} alt="" />
                </div>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{user.name.title}. {user.name.first} {user.name.last}</div>
                    <p className="text-gray-700 text-base">
                        Phone: {user.phone}
                    </p>
                </div>
            </div>
        </>
    )


}

export default UserCard