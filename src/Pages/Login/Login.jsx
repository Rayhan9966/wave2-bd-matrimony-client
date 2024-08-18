import { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import SocialLogin from '../../Component/SocialLogin';
// import img1 from '../../../assets/New folder/bgimg/aboutbgimg.jpg';


const Login = () => {
  // const captchaRef=useRef(null);
  // const [disabled,setDisabled]=useState(true);

  const { signIn } = useContext(AuthContext)
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';
  console.log('state in the location login page',location.state);
  useEffect(() => {
    loadCaptchaEnginge(4);
  }, [])
  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login Successfully",
          showConfirmButton: false,
          timer: 1500
        });
        navigate(from, { replace: true });
      })

  }
  const handleValidCaptcha = (e) => {
    const user_value = e.target.value;
    //      if(validateCaptcha(user_value)){
    //      setDisabled(false);
    //      }
    //      else{
    //   setDisabled(true);
    //      }
    // ;

  }
  return (
    <>
      <Helmet>
        <title>Bd Matrimony | Log In</title>
      </Helmet>
      <div className='mt-10'>
        <div className="flex w-full  max-w-sm mx-auto overflow-hidden rounded-lg shadow-lg dark:bg-gray-500 lg:max-w-4xl">
          <div
            className="hidden bg-cover lg:block lg:w-1/2"
            style={{
              backgroundImage:
                'url("https://i.postimg.cc/KYcsQ3kk/bio.jpg")'
            }}
          />
          <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
            <div className="flex justify-center mx-auto">
              <img
                className="w-auto h-7 sm:h-8"
                style={{ width: 40, height: 40, borderRadius: 40 / 2 }}
                src="/src/assets/New folder/bgimg/img1.jpg"
                alt=""
              />
            </div>
            <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
              Welcome back!
            </p>
       {/* //google buttn */}
       <SocialLogin></SocialLogin>
            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4" />
              <a
                href="#"
                className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline"
              >
                or login with email
              </a>
              <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4" />
            </div>
            <form onSubmit={handleLogin}>
              <div className="mt-4">
                <label
                  className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                  htmlFor="LoggingEmailAddress"
                >
                  Email Address
                </label>
                <input

                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                  type="email" placeholder='Email' name='email'
                />
              </div>
              <div className="mt-4">
                <div className="flex justify-between">
                  <label
                    className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                    htmlFor="loggingPassword"
                  >
                    Password
                  </label>
                  <a
                    href="#"
                    className="text-xs text-gray-500 dark:text-gray-300 hover:underline"

                  >
                    Forget Password?
                  </a>
                </div>

                <input

                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                  type="password" placeholder='Password***' name='password'
                />
                <div className="flex justify-between">
                  <label
                    className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                    htmlFor="loggingPassword"
                  >
                    Captcha
                  </label>
                  <a
                    href="#"
                    className="text-xs text-gray-500 dark:text-gray-300 hover:underline"

                  >
                    fill this captcha
                  </a>
                </div>
                <label>
                  <LoadCanvasTemplate />
                </label>
                <input onBlur={handleValidCaptcha}

                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                  type="text" placeholder='Captcha' name='captcha'
                />
              </div>

              <div className="mt-6">
                {/* <button>
              Sign In
            </button> */}
                {/* <div>
              <button  className="btn btn-outline btn-success">Validation</button>
              </div> */}
                <div className='form-control  text-white  mt-6'>
                  <input className="btn btn-primary " type='submit' value='Login'></input>
                </div>

              </div>
            </form>
            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4" />
              <Link to='/signup'
                href="#"
                className="text-xs text-white uppercase hover:dark:text-green-500 hover:underline"
              >
                or Sign up
              </Link>
              <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4" />
            </div>
          </div>
        </div>
      </div></>

  );
};

export default Login;