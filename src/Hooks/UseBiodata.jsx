import { useEffect, useState } from "react";

const UseBiodata =()=>{

    const [premium, setPremium]=useState([]);
    const [loading, setLoading]=useState(true);

useEffect ( () =>{
  
   fetch('http://localhost:5000/biodata')
   .then(res=> res.json())
   .then(data=>
   {
    setPremium(data);
    setLoading(false);
    // const premiumBio=data.filter(bio=>bio.category ==='Premium');
    // setPremium(premiumBio)
} )
},[])
return [premium,loading]


}
export default UseBiodata;