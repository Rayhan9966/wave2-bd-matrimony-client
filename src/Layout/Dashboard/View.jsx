import React from 'react';
import useView from '../../Hooks/useView';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { Link } from 'react-router-dom';

const View = () => {
    const axiosSecure = useAxiosSecure();

    const [view, refetch] = useView();
    const handleDelete = id => {
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

                axiosSecure.delete(`/views/${id}`)
                    .then(res => {
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
            <div className='flex justify-between text-2xl mb-8 font-bold p-4'>
                <h2 className='' >Total Members:{view.length}</h2>
                {/* <button className='btn btn-outline'>Payment</button> */}
            </div>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr className='font-bold text-xl'>
                            <th>
                                #
                            </th>
                            <th>Image</th>
                            <th>Gender</th>
                            <th>Occupation</th>
                            <th>Division</th>
                            <th>Action</th>
                            <th>Payment</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            view.map((viewmember, index) => <tr key={viewmember._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-16 w-16">
                                                <img
                                                    src={viewmember.profile_image}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>
                                    {viewmember.biodata_type}

                                </td>
                                <td>{viewmember.occupation}</td>

                                <td>
                                    {viewmember.permanent_division}
                                </td>
                                <th>
                                    <button onClick={() => { handleDelete(viewmember._id) }} className="btn btn-ghost btn-xs"><FaTrashAlt className=' font-bold text-2xl text-red-500'></FaTrashAlt></button>
                                </th>
                                <Link to='/dashboard/payment'><button className='btn btn-outline mt-5'>Payment</button></Link>
                            </tr>)
                        }
                        {/* row 1 disabaled={!view.length>0}
                        <
{view.length ? < Link to="/dashboard/payment" >
<button className="btn btn-primary">Pay</button>
< / Link > :
<button disabled  className="btn btn-primary">Pay</button>*/}



                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default View;