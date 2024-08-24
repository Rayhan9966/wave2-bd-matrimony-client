import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";



 const axiosSecure=axios.create({
baseURL:'http://localhost:5000'
})

const useAxiosSecure = () => {
    const {logOut}=useAuth();
    const navigate=useNavigate();
    axiosSecure.interceptors.request.use(function(config){
        const token = localStorage.getItem('access-token')
        // console.log('reqst stp by intercptr', token)
        config.headers.authorization = `Bearer ${token}`;
        return config;
    },function (error){
        return Promise.reject(error);
    });
    // intercepts 401 and 403 status
axiosSecure.interceptors.response.use(function(response) {
    return response;
},
  async  (error) => {
    const status = error.response.status;
    // console.log(' status error in the interceptor' , status);
    //401 403  logoiut the user and move to login page
    if(status ===401 || status ){
        await logOut();
navigate('/login');
    }
    return Promise.reject(error);
    })
 return axiosSecure;
};

export default useAxiosSecure;
