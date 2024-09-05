import { useQuery } from "@tanstack/react-query";
// import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";

const UseBiodata =()=>{
    const axiosPublic = useAxiosPublic();

    // const [premium, setPremium]=useState([]);
//     const [biodata, setBiodata]=useState([]);
//     const [loading, setLoading]=useState(true);

// useEffect ( () =>{
  
//    fetch('https://matrimony-bd-server.vercel.app/biodata')
//    .then(res=> res.json())
//    .then(data=>
//    {
//     // setPremium(data);
//     setBiodata(data);
//     setLoading(false);
//     // const premiumBio=data.filter(bio=>bio.category ==='Premium');
//     // setPremium(premiumBio)
// } )
// },[])

// const {data : biodata = [], isPending: loading, refetch} = useQuery({
const {data : biodata1 = [], isPending: loading, refetch} = useQuery({
    queryKey:['biodata1'],
    // queryKey:['biodata'],
    queryFn : async()=>{
        const res =await axiosPublic.get('/biodata1');
        console.log(res,'this is use biodata hook');
        // const res =await axiosPublic.get('/biodata');
        return res.data;

    }
})
return [biodata1,loading,refetch]
// return [biodata,loading,refetch]
// return [premium,loading]


}
export default UseBiodata;