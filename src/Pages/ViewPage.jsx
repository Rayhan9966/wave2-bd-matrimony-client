
import React from 'react';
import { FaCalendar, FaCalendarDay, FaCalendarTimes, FaHome } from 'react-icons/fa';
// import { FaLocationArrow } from 'react-icons/fa';
import { FaCalendarCheck, FaLocationCrosshairs, FaLocationDot, FaLocationPin, FaLocationPinLock, FaMapLocation } from 'react-icons/fa6';
import { Link, useLoaderData } from 'react-router-dom';
// import { Link, useLoaderData } from 'react-router-dom';

const ViewPage = () => {
    const viewDetails=useLoaderData();
    return (
        <div>
           {/* <div> <h1>{viewDetails.title}</h1></div> */}
<div>
<section className="bg-white mt-2 bg-fixed dark:bg-white-900 mt-10">
  <div className="container px-6 py-10 mx-auto">
    <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl mt-10 dark:text-black">
    {viewDetails.name}
    </h1>
    <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
      <img
        className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96"
        src={viewDetails.profile_image}
        alt=""
      />
      <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
        <p className="text-sm font-bold text-black-500 uppercase">category : {viewDetails?.category}</p>
        <a
          href="#"
          className="block mt-4 text-xl  text-black-800 "
        >
          <div className='flex gap-1'>
          <FaLocationDot></FaLocationDot>Permanent Address: {viewDetails?.permanent_division}
          </div>
        </a>
        <p className="mt-3  text-gray-500 dark:text-black-300 md:text-sm">
        <span className='font-bold'>
        Description:</span> {viewDetails.description}
        </p>
        <a
          href="#"
          className=" font-semibold  text-black-800"
        >
     Gender: {viewDetails.biodata_type}
        </a><br />
        <a
          href="#"
        className=" font-semibold  text-black-800"
        >
       Occupation: {viewDetails.occupation}
        </a>
        <br />
        <a
          href="#"
          className=" font-semibold  text-black-800"
        >
       Religion: {viewDetails.religion}
        </a>
        <br />
        <a
          href="#"
          className=" font-semibold  text-black-800"
        >
       Height: {viewDetails.height}
        </a>
        <br />
        <a
          href="#"
          className=" font-semibold  text-black-800"
        >
       Weight: {viewDetails.weight}
        </a>
        <br />
        <a
          href="#"
           className=" font-semibold  text-black-800"
        >
       Age: {viewDetails.age}
        </a><br />
        
        {/* <div className="flex items-center mt-6">
        <FaCalendarCheck></FaCalendarCheck>  Date Of Birth: 
          <div className="mx-4">
            <h1 className="text-sm text-black-700">
            {viewDetails.date_of_birth}
            </h1>
        
          </div>
         
        </div> */}
         <a
          href="#"
           className=" font-semibold  text-black-800"
        >
       Date Of Birth: {viewDetails.dob}
        </a><br />
      
        <a
          href="#"
           className=" font-semibold  text-black-800"
        >
       Father Name: {viewDetails.father_name}
        </a> <br></br>
        
        <a
          href="#"
           className=" font-semibold  text-black-800"
        >
       Mother Name: {viewDetails.mother_name}
        </a>
        <p  className=" font-semibold  text-black-800">
        Mobile Number:  {viewDetails.mobile}
            </p>
        <p  className=" font-semibold  text-black-800">
         Mail :  {viewDetails.email}
            </p>
          <Link to='/allbiodata'> <button className='btn btn-outline mt-6 '>   <FaHome className='text-2xl'></FaHome>   </button></Link>
      </div>
      
    </div>
  </div>
</section>

</div>

         
        </div>
    );
};

export default ViewPage;
