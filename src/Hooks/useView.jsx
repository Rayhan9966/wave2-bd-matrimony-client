import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const useView = () => {
//tan stack querry
const axiosSecure=useAxiosSecure();
const {user}= useAuth();
const {refetch,data: view = []} = useQuery({
    queryKey: ['view'],
    queryFn: async()=>{
const res=await axiosSecure.get(`/views?email=${user.email}`)
return res.data;

}

})
return [view,refetch]
};

export default useView;