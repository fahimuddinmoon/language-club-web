import { createContext, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "./ContextAPI";
import axios from "axios";
import Swal from "sweetalert2";


const UpdatePage = () => {
    const {user} = useContext(AuthContext)
    const { _id } = useParams()
     const [info, setInfo] = useState({})
    useEffect(()=>{
        fetch(`http://localhost:5000/addCourse/${_id}`)
        .then(res => res.json())
        .then(data => setInfo(data))
    },[])
         
         const {Name,email,image,language,price,review,Description,_id :id} = info

    const handleSubmit = async (e) => {
        e.preventDefault()
        const Name = e.target.Name.value
        const email = e.target.email.value
        const language = e.target.language.value
        const Description = e.target.Description.value
        const price = e.target.price.value
        const image = e.target.image.value
        const UpData = {Name,email,image,language,price,review,Description}
        const {data} = await axios.put(`http://localhost:5000/addCourse/${id}`,UpData)
        
        if(data.modifiedCount){
                        Swal.fire({
                            title: "Updated Successfully!",
                            icon: "success",
                            draggable: true
                          });

        }

    }
         
    return (
        <div className="w-10/12 mx-auto px-4">
            <h2 className="text-center text-2xl font-bold my-6">Update Equipment</h2>
            <div className="card bg-base-100 w-full  shrink-0 shadow-2xl">
                <form onSubmit={handleSubmit} className="card-body">

                    <div className="sm:flex justify-between gap-4">
                        {user?.displayName && (
                            <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name"  Value={user?.displayName} name="Name" className="input input-bordered" required />
                        </div>
                        )}

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email"  Value={user?.email} name="email" className="input input-bordered" required />
                        </div>
                    </div>

                    <div className="sm:flex justify-between gap-4">
                        {
                            language && (<div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Language</span>
                                </label>
                                <select name="language" id="cars" defaultValue={language} className="h-11 rounded-lg border-gray-300 border">
                                    <option value="English">English</option>
                                    <option value="Spanish">Spanish</option>
                                    <option value="French">French</option>
                                    <option value="German">German</option>
                                    <option value="Italian">Italian</option>
                                    <option value="Chinese">Chinese</option>
                                    <option value="Arabic">Arabic</option>
                                    <option value="Japanese">Japanese</option>
                                    <option value="Bangla">Bangla</option>
                                </select>
                            </div>)
                        }

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="text" placeholder="Description" Value={Description} name="Description" className="input input-bordered" required />
                        </div>
                    </div>

                    <div className="sm:flex justify-between gap-4">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="number" placeholder="Price" Value={price} name="price" className="input input-bordered" required />

                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">image</span>
                            </label>
                            <input type="text" Value={user?.photoURL} placeholder="Image URL" name="image" className="input input-bordered" required />
                        </div>
                    </div>


                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Added</button>
                    </div>
                </form>

            </div>

        </div>
    );
};

export default UpdatePage;