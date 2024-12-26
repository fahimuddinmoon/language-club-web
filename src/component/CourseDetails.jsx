import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from './ContextAPI';
import axios from 'axios';
import Swal from 'sweetalert2';

const CourseDetails = () => {
    const {user}=useContext(AuthContext)
    const { _id } = useParams()
    const [info, setInfo] = useState({})
    useEffect(() => {
        fetch(`https://language-course-server.vercel.app/addCourse/${_id}`)
            .then(res => res.json())
            .then(data => setInfo(data))
    }, [])
    const {_id:jobId,Name, email, language, Description, price, image, review } =info    
    const loggedEmail = user?.email
 

    const handleBook = async () => {
       if(loggedEmail === email)
        return alert('Action Not Permitted')
       const bookData = {jobId,image,language,price,email,loggedEmail,Name}
       const {data} = await axios.post('https://language-course-server.vercel.app/allBookedData',bookData)
        if(data.insertedId){
                        Swal.fire({
                            title: "Course Added Successfully!",
                            icon: "success",
                            draggable: true
                          });

        }

    }


    return (
        <div className="w-10/12 mx-auto p-4 ">
            <div className=" text-center  z-10">
                <h1 className='text-4xl font-bold  py-4'>
                    Course Details
                </h1>
                <p className='text-sm font-semibold lg:px-60 py-4'>
                    Explore the latest product that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                </p>
            </div>
            <div className=" w-full lg:w-8/12 lg:grid lg:grid-cols-2 gap-9 p-5 bg-slate-200 mx-auto   rounded-lg ">
                <div className="">
                    <img className="w-full h-full rounded-lg" src={image} alt="" />
                </div>
                <div >
                    <h2 className="text-2xl font-bold mb-2">Tutor Name : {Name}</h2>
                    <h2 className="text-2xl font-bold mb-2">Email : {email}</h2>
                    <p className="text-lg font-bold mb-2">Category : {language}</p>
                    <p className="text-sm font-semibold text-gray-700 mb-2">Information : {Description}</p>
                    <p className="text-xl font-bold mb-2">Price : {price} tk</p>
                    <p className="text-xl font-bold mb-2">Review : {review} </p>
                    <div className="flex items-center gap-4">
                        <button onClick={handleBook} className="bg-pink-700 py-1 px-3 border-2 border-gray-800 rounded-full text-white font-semibold text-lg">Booked</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CourseDetails;