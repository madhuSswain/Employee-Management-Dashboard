import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        //mock credentials
    const USERNAME = "admin";
    const PASSWORD = "password";

    if(username === USERNAME && password === PASSWORD){
        //save login state
        localStorage.setItem("isLoggedIn", "true");
        navigate("/dashboard");
    }
    else {
        setError("Invalid Username and Password");
    }
    };

    

  return (
    <div className='min-h-screen bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-400 flex items-center justify-center p-4'>
        <div className='bg-white rounded-2xl w-full max-w-md p-8'>
            <div className='text-center'>
                <h2 className='text-3xl font-bold text-gray-900 mb-2'>Welcome Back</h2>
            <p className='text-gray-600'>Sign in to access the dashboard</p>
            </div>
            
        <form className='space-y-6' onSubmit={handleSubmit}>
            {error && 
            (<p className='text-red-500 text-center text-sm'>
                {error}
            </p>)}
            <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>Username</label>
               <input type="text"
               value={username}
               onChange={(e)=>setUsername(e.target.value)}
                className='w-full px-4 py-3 border border-gray-300 rounded-lg'
                placeholder='Enter Username' 
                required/>
            </div>
            <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>Password</label>
               <input type="password"
               value={password}
               onChange={(e)=>setPassword(e.target.value)}
                className='w-full px-4 py-3 border border-gray-300 rounded-lg'
                placeholder='Enter Password' 
                required/>
            </div>
            <button type='submit' className='w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg py-3 font-semibold'>Sign In</button>
        </form>
        </div>
    </div>
  )
}

export default Login;