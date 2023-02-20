import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function LoginForm() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loginErr, setLoginErr] = useState(false)

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (username === 'foo' && password === 'bar') {
            localStorage.setItem('user', 'foo')
            navigate('/')
        } else {
            setLoginErr(true)
        }
    }

    return (
        <div>
            <section className="bg-[#440858] dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <h1 className="logoAnchor text-4xl flex items-center mb-6 font-semibold text-gray-900 dark:text-white">
                        <span className='text-white'>Welcome Again !!!</span>
                    </h1>
                    <div className="w-[25%] bg-[#E5B8F4] border border-gray-300 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Please login to Continue
                            </h1>
                            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                                <div>
                                    <input type="text" name="username" id="username"
                                        value={username}
                                        onChange={(e) => {
                                            setUsername(e.target.value)
                                            setLoginErr(false)
                                        }}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder='Username' />
                                </div>

                                <div>
                                    <input type="password" name="password" id="password"
                                        value={password}
                                        onChange={(e) => {
                                            setPassword(e.target.value)
                                            setLoginErr(false)
                                        }}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Password" />
                                </div>
                                <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign in</button>
                                <small>Hint: Username: foo, Password: bar </small>  <br />
                                {loginErr && <small className='text-red-600'>Invalid Username or Password</small>}
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default LoginForm