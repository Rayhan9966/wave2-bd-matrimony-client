import React from 'react';
import SectionTitle from '../../Component/SectionTitle';
import UseBiodata from '../../Hooks/UseBiodata';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { Link } from 'react-router-dom';

const EditBioData = () => {
    const [biodata1,refetch] = UseBiodata();
    // const [biodata,refetch] = UseBiodata();
    const axiosSecure = useAxiosSecure();

    const handleDeleteBdata = (bdata) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/biodata1/${bdata._id}`);
                // const res = await axiosSecure.delete(`/biodata/${bdata._id}`);
                console.log(res.data);
                if (res.data.deletedCount > 0) {
//refetch
refetch();


                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${bdata.name} has been deleted.`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                //
            }
        });

    }
    return (
        <div>
            <SectionTitle heading="Edit Bio Data"></SectionTitle>
            <div>
                <div>
                    <div className="flex items-center gap-x-3">
                        <h2
                            className="text-3xl justify-start font-bold">Total Bio Data</h2>

                        <span className="px-3 py-1 text-3xl text-violet-600 bg-blue-100 rounded-full font-bold dark:bg-white-800 dark:text-violet-600">{biodata1.length}</span>
                    </div>
                    <div className='flex justify-start my-4 '>
                        {/* <h2 className='text-3xl font-bold'>All users</h2> */}
                        {/* <h2 className='text-3xl justify-start font-bold'>Total Biodata:{biodata.length}</h2> */}
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
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Gender</th>
                                    <th>Adress</th>
                                    
                                    <th>Update</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    // biodata.map((bdata, index) => <tr key={bdata._id}>
                                    biodata1.map((bdata, index) => <tr key={bdata._id}>
                                        <th>
                                            {index + 1}
                                        </th>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle h-16 w-16">
                                                        <img
                                                            src={bdata.image}
                                                            alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>

                                            </div>
                                        </td>
                                        <td>
                                            {bdata.name}

                                        </td>
                                        <td>{bdata.email}</td>
                                        <td>{bdata.biodata_type}</td>
                                        <td>{bdata.permanent_division}</td>
                                       
                                        {/* <th>
                                  { user.role === 'admin'? 'Admin':  <button onClick={()=>{handleMakeAdmin(user)}}
                                     className="btn btn-ghost btn-xs"><FaUsers
                                      className=' font-bold text-3xl violet-500'></FaUsers>
                                      </button>}
                                </th> */}


                                        <th>
                                            <Link to={`/dashboard/updatebiodata/${bdata._id}`}>
                                            <button className="btn btn-ghost btn-sm"><FaEdit className=' font-bold text-2xl text-green-500'></FaEdit></button>
                                            </Link>
                                        </th>

                                        <th>
                                            <button onClick={() => handleDeleteBdata(bdata)} className="btn btn-ghost btn-sm"><FaTrashAlt className=' font-bold text-2xl text-red-500'></FaTrashAlt></button>
                                        </th>
                                    </tr>)
                                }
                                {/* row 1 */}


                            </tbody>

                        </table>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default EditBioData;