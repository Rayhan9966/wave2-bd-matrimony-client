import axios from "axios";

const axiosPublic =axios.create({
baseURL:'https://matrimony-bd-server.vercel.app'
})
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;