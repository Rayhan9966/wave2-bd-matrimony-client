import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {createUser}=useContext(AuthContext);
    const onSubmit = data =>  { 
        console.log(data);
        createUser(data.email, data.password)
        .then(result=>{
            const loggedUser=result.user;
            console.log(loggedUser);
        })
    }
  
    return (
    <>
         <Helmet>
    <title>Bd Matrimony | Sign Up</title>
</Helmet>
        <section className="bg-white dark:bg-gray-900">
        <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">


            {/* form start */}

          <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">
            <div className="flex justify-center mx-auto">
              {/* <img
                className="w-auto h-7 sm:h-8"
                src="https://merakiui.com/images/logo.svg"
                alt=""
              /> */}
                  <img
              className="w-auto h-7 sm:h-8"
              style={{width:40, height:40, borderRadius: 40/ 2}} 
              src="/src/assets/New folder/bgimg/img1.jpg"
              alt=""
            />
            </div>
            <div className="flex items-center justify-center mt-6">
              <Link to='/login'
                href="#"
                className="w-1/3 pb-4 font-medium text-center text-gray-500 capitalize border-b dark:border-gray-400 dark:text-gray-300"
              >
                sign in
              </Link>
              <a
                href="#"
                className="w-1/3 pb-4 font-medium text-center text-gray-800 capitalize border-b-2 border-blue-500 dark:border-blue-400 dark:text-white"
              >
                sign up
              </a>
            </div>
               {/* //user name */}
            <div className="relative flex items-center mt-8">
              <span className="absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </span>
              <input
                type="text"
                {...register("name", { required: true })}
                name='name'
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Username"
                
              />
           
            </div>
            {errors.name && <span className='text-red-600'>*Name is required</span>}
           
          {/* photo url */}
           <div>
           <label
              htmlFor="dropzone-file"
              className="flex items-center px-3 py-3 mx-auto mt-6 text-center bg-white border-2 border-dashed rounded-lg cursor-pointer dark:border-gray-600 dark:bg-gray-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-gray-300 dark:text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                />
              </svg>
              <h2 className="mx-3 text-gray-400">Profile Photo</h2>
              <input id="dropzone-file" type="file"  {...register("photo", { required: true })}  name='photo'  />
            </label>
           </div>
           {errors.photo && <span className='text-red-600'>*Photo is required</span>}
   {/* //mail address */}
            <div className="relative flex items-center mt-6">
              <span className="absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </span>
              <input
                type="email"
                  name='email'
                  {...register("email", { required: true })}
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Email address"
              />
            </div>
            {errors.email && <span className='text-red-600'>*Email is required</span>}
            {/* //password */}
            <div className="relative flex items-center mt-4">
              <span className="absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </span>
              <input
                type="password"
                {...register("password", { required: true,
                     minLength:5,
                     maxLength:10,
                    pattern: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/})}
                  name='password'
                className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Password"
              />
            </div>
            {errors.password?.type === 'required' && <span className='text-red-600'>*Password is required</span>}
            {errors.password?.type === 'minLength' && <span className='text-red-600'>*Password min 5 character </span>}
            {errors.password?.type === 'maxLength' && <span className='text-red-600'>*Password max 10 character </span>}
            {errors.password?.type === 'pattern' && <span className='text-red-600'>*Lower case upper case special character </span>}
        
            <div className="mt-6">
              <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                Sign Up
              </button>
              <div className="mt-6 text-center ">
                <a
                  href="#"
                  className="text-sm text-blue-500 hover:underline dark:text-blue-400"
                >
                  Already have an account?
                </a>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
      
    );
};

export default SignUp;