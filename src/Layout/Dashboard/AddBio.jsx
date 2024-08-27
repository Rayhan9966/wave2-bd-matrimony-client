
import { FaUtensils } from "react-icons/fa6";
import SectionTitle from "../../Component/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";



const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


const AddBio = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const onSubmit = async (data) => {
        console.log(data)
        // img upld to img bb  //thn go to server
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            // ?now send data server 
            const bioData = {
                name: data.name,
                email: data.name,
                profile_image: data.profile_image,
                occupation: data.occupation,
                permanent_division: data.permanent_division,
                biodata_type: data.biodata_type,
                age: data.age,
                image: res.data.data.display_url


            }
            const bioRes = await axiosSecure.post('/biodata', bioData);
            console.log(bioRes.data);
            if (bioData.data.insertedId) {
                reset();
                //show pop up
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Add Bio data successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
            };

        }
        console.log('with img url', res.data);
    }
    return (
        <div>
            <SectionTitle heading="Add An Item" > </SectionTitle>
            <div>

                <form className="bg-violet-300 ml-10 mb-2 mt-4" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-14/16 mx-6 ">
                        <label className="label">
                            <span className="label-text">Name*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Full Name"
                            {...register('name', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                    <div className="flex gap-2">
                        {/* category */}
                        <div className="form-control w-full  mx-6 ">
                            <label className="label">
                                <span className="label-text">Gender*</span>
                            </label>
                            <select defaultValue="default" {...register('biodata_type', { required: true })}
                                className="select select-bordered w-full">
                                <option disabled value="default">Select a Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>

                            </select>
                        </div>
                        {/* //ocupation */}
                        <div className="form-control w-full mx-6">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Description"
                                {...register('price', { required: false })}
                                className="input input-bordered w-full" />
                        </div>
                    </div>
                    {/* option */}
                    <div className="flex gap-2">
                        <div className="form-control w-full mx-6">
                            <label className="label">
                                <span className="label-text">Religion</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Religion"
                                {...register('price', { required: false })}
                                className="input input-bordered w-full" />
                        </div>
                        {/* //ocupation */}
                        <div className="form-control w-full mx-6">
                            <label className="label">
                                <span className="label-text">Occupation*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Occupation"
                                {...register('price', { required: true })}
                                className="input input-bordered w-full" />
                        </div>
                    </div>


                    {/* option */}
                    <div className="flex gap-2">
                        <div className="form-control w-full mx-6">
                            <label className="label">
                                <span className="label-text">Father Name*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Occupation"
                                {...register('price', { required: true })}
                                className="input input-bordered w-full" />
                        </div>
                        {/* //ocupation */}
                        <div className="form-control w-full mx-6">
                            <label className="label">
                                <span className="label-text">Mother Name*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Occupation"
                                {...register('price', { required: true })}
                                className="input input-bordered w-full" />
                        </div>
                    </div>

                    {/* option */}
                    <div className="flex gap-2">
                        <div className="form-control w-full mx-6">
                            <label className="label">
                                <span className="label-text">Height*</span>
                            </label>
                            <input
                                type="text"

                                placeholder="Occupation"
                                {...register('price', { required: true })}
                                className="input input-bordered w-full" />
                        </div>
                        {/* //ocupation */}
                        <div className="form-control w-full mx-6">
                            <label className="label">
                                <span className="label-text">Weight*</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Occupation"
                                {...register('price', { required: true })}
                                className="input input-bordered w-full" />
                        </div>
                    </div>

                    {/* option */}
                    <div className="flex gap-2">
                        <div className="form-control w-full mx-6">
                            <label className="label">
                                <span className="label-text">Date Of Birth*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Date Of Birth"
                                {...register('price', { required: true })}
                                className="input input-bordered w-full" />
                        </div>
                        {/* //ocupation */}
                        <div className="form-control w-full  mx-6 ">
                            <label className="label">
                                <span className="label-text">Division*</span>
                            </label>
                            <select defaultValue="default" {...register('permanent_division', { required: true })}
                                className="select select-bordered w-full">
                                <option disabled value="default">Select a Division</option>
                                <option value="chittagong">Chittagong</option>
                                <option value="dhaka">Dhaka</option>
                                <option value="rajshahi">Rajshahi</option>
                                <option value="khulna">Khulna</option>
                                <option value="barisal">Barisal</option>
                                <option value="shylet">Shylet</option>

                            </select>
                        </div>
                    </div>

                    {/* option */}
                    <div className="flex gap-2">
                        <div className="form-control w-full mx-6">
                            <label className="label">
                                <span className="label-text">Email*</span>
                            </label>
                            <input
                                type="email"
                                placeholder="example@gmail.com"
                                {...register('price', { required: true })}
                                className="input input-bordered w-full" />
                        </div>
                        {/* //ocupation */}
                        <div className="form-control w-full mx-6">
                            <label className="label">
                                <span className="label-text">Mobile Number*</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Mobile Number"
                                {...register('mobile', { required: true })}
                                className="input input-bordered w-full" />
                        </div>
                        {/* option */}

                    </div>
                    {/* photo url */}
                    <div>
                        <label
                            htmlFor="dropzone-file"
                            className="flex items-center px-3 py-3 mx-auto mt-6 text-center  w-14/16  mx-6 dark:border-gray-600 dark:bg-violet-500 border-2 border-dashed rounded-lg cursor-pointer "
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6 text-white  dark:text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                                />
                            </svg>
                            <h2 className="mx-3 font-bold text-white">Profile Photo</h2>
                            {/* <input id="dropzone-file" type="file"  {...register("photoUrl", { required: true })} name='photo' /> */}
                            <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                        </label>
                    </div>
                    {/* {errors.photoUrl && <span className='text-red-600'>*Photo URL is required</span>} */}
                    <br></br>
                    <button className=" btn btn-primary w-14/16 ml-6 mb-2">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );


};


export default AddBio;