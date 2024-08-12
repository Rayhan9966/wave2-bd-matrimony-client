import React from 'react';
import PremiumCard from '../../Home/Premium/PremiumCard';
import Cover from '../../Shared folder/Cover/Cover';

const BiodataCategory = ({bios,title,img}) => {
    return (
        <div className='pt-8'>
            
{title&& <Cover img={img} title={title}></Cover>}
            <div className='grid mt-16 grid-cols-3 gap-4'>
    {
    bios.map(bio=><PremiumCard
    key={bio._id}
    bio={bio}>

    </PremiumCard>)    
    }
</div>
        </div>
    );
};

export default BiodataCategory;