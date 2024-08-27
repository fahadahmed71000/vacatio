import React from 'react'
import L from '../../assets/login.png'
import Google from '../../assets/google.png'
import Fb from '../../assets/fb.png'
import Apple from '../../assets/apple.png'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
        <div className="container">
            <div className="login and img flex justify-evenly ">
                <div className="left pt-9">
                    <img className='' src={L} alt="" />
                </div>



                <div className="right">
                <div className="flex justify-center items-center min-h-screen">
      <div className="shadow-xl rounded px-8 pt-6 pb-8 mb-4 w-96">
        <div className="mb-4 text-center">
          <h2 className="text-2xl font-bold text-gray-800">Hello! Welcome Back</h2>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email Or Mobile Number
          </label>
          <input
            className="shadow-xl border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder=""
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow-xl  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder=""
          />
        </div>
        <div className="flex justify-around items-center mb-4">
          <input
            id="remember"
            type="checkbox"
            className="form-checkbox h-5 w-5 text-blue-600 focus:ring-blue-500"
          />
          <label className="ml-2 block text-sm text-gray-900" htmlFor="remember">
            Remember Me
          </label>
          <a
            href="#"
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          >
            Forgot Password?
          </a>
        </div>
        <div className="flex items-center justify-between">

          <button
            className="bg-blue-500 w-44 mx-auto  hover:bg-blue-700 text-white font-bold p-1 px-4 rounded-lg focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Login
          </button>
          
        </div>
        <div className="mt-4 text-center">
          <span className="text-gray-600">-OR-</span>
        </div>
        <div className="flex justify-center items-center mt-4">
<div className="logo flex gap-5">
          <img src={Google} alt="" />
          <img src={Fb} alt="" />
          <img src={Apple} alt="" />
          </div>
          

        </div>
        <div className="mt-4 text-center">
          <Link to='/signup'>
          <a
            href="#"
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          >
            Don't Have An Account? Create Account
          </a>
          </Link>

        </div>
      </div>
    </div>

                </div>

            </div>




        </div>


    </div>
  )
}

export default Login