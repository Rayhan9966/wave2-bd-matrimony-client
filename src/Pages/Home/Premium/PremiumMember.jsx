import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Component/SectionTitle';
import PremiumCard from './PremiumCard';
import UseBiodata from '../../../Hooks/UseBiodata';

const PremiumMember = () => {
    const [premium]=UseBiodata();
    const premiumMember=premium.filter(bio=>bio.category ==='Premium');
//     setPremium(premiumBio)
//     const [premium, setPremium]=useState([]);

// useEffect( () =>{
  
//    fetch('Premium.json')
//    .then(res=> res.json())
//    .then(data=>
//    {
//     const premiumBio=data.filter(bio=>bio.category ==='Premium');
//     setPremium(premiumBio)} )
// },[])

    return (
   <section>
    <SectionTitle 
    heading="Premium Members">
        
    </SectionTitle>

<div className='grid grid-cols-3 gap-4'>
    {
    premiumMember.map(bio=><PremiumCard
    key={bio._id}
    bio={bio}>

    </PremiumCard>)    
    }
</div>


   </section>
    );
};

export default PremiumMember;