import { useQuery } from '@tanstack/react-query';
import React from 'react';
// import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { FaTrashAlt } from 'react-icons/fa';
import { FaUsers } from 'react-icons/fa6';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const ManageUsers = () => {
    // const axiosSecure=useAxiosSecure();
     const axiosSecure=useAxiosSecure();
    const {data: users =[],refetch} =useQuery({
        queryKey : ['users'],
        queryFn : async () =>{
const res =await axiosSecure.get('/users');
//     ,{
//     headers: {
//        authorization  : `Bearer ${localStorage.getItem('access-token')}`
      
//     }
// }

return res.data;
        }
    })
    const handleMakeAdmin = user =>{
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res=>{
            console.log(res.data);
            if(res.data.modifiedCount>0){
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name} is an Admin now`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }
    const handleDeleteUser =user =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
          
            axiosSecure.delete(`/users/${user._id}`)
            .then(res=>{
                if (res.data.deletedCount > 0) {
                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }
            })
            }
          });
    }
    return (
        <div>
        <div className='flex justify-evenly my-4 '>
        <h2 className='text-3xl font-bold'>All users</h2>
        <h2 className='text-3xl font-bold'>Total users:{users.length}</h2>
        </div>
        <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr className='font-bold text-xl'>
                            <th>
                              #
                            </th>
                            {/* <th>Image</th> */}
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user,index)=> <tr key={user._id}>
                                <th>
                                  {index+1}
                                </th>
                                {/* <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-16 w-16">
                                                <img
                                                    src={user.photoURL}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                       
                                    </div>
                                </td> */}
                                <td>
                                {user.name}
                                   
                                </td>
                                <td>{user.email}</td>
                                <th>
                                  { user.role === 'admin'? 'Admin':  <button onClick={()=>{handleMakeAdmin(user)}}
                                     className="btn btn-ghost btn-xs"><FaUsers
                                      className=' font-bold text-3xl violet-500'></FaUsers>
                                      </button>}
                                </th>
                              
                             
                                <th>
                                    <button onClick={()=>{handleDeleteUser(user)}} className="btn btn-ghost btn-xs"><FaTrashAlt className=' font-bold text-2xl text-red-500'></FaTrashAlt></button>
                                </th>
                            </tr>)
                        }
                        {/* row 1 */}
                        
                     
                    </tbody>
                  
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;