import React from 'react';

const PremiumCard = ({bio}) => {
    const{_id, biodata_type,profile_image,permanent_division, age,occupation,category}=bio;
    return (
        <div>
            <div className="max-w-x rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
               
	<img src={profile_image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
    <h2  className="text-2xl font-bold border-x-slate-50 ">ID:{_id}</h2>
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-3xl font-semibold tracking-wide">{biodata_type}</h2>
			
			<h5 className="text-xl font-semibold tracking-wide">Location:{permanent_division}</h5>
			<h5 className="text-xl  tracking-wide">Age:{age}</h5>
            <h5 className="text-2xl  font-semibold   tracking-wide">{occupation}</h5>
			
		</div>
		<button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50">View Profile</button>
	</div>
</div>
        </div>
    );
};

export default PremiumCard;