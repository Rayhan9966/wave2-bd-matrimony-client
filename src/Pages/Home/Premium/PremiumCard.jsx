
import Swal from 'sweetalert2';
import useAuth from '../../../Hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const PremiumCard = ({bio}) => {
	const{_id, biodata_type,profile_image,permanent_division, age,occupation,category}=bio;

	const {user}=useAuth();
	const navigate=useNavigate();

	const handleAddtoView = member=>{
	if(user && user.email){
		//sent view item to the database
}
else{
	Swal.fire({
		title: " Are you log in?",
		text: "Please login to Add view",
		icon: "warning",
		showCancelButton: true,
		confirmButtonColor: "#3085d6",
		cancelButtonColor: "#d33",
		confirmButtonText: "Login"
	  }).then((result) => {
		if (result.isConfirmed) {
		//send to login page
navigate('/login')
		}
	  });
}
	}
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
		<div className='flex gap-2'>
		<button onClick={()=>handleAddtoView(bio)} type="button" className="flex items-center justify-center w-1/3 p-3 font-semibold tracking-wide rounded-md dark:bg-orange-600 dark:text-gray-50">View </button>
		<button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50">View Profile</button>
		</div>
	</div>
</div>
        </div>
    );
};

export default PremiumCard;