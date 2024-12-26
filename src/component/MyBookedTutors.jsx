import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./ContextAPI";
import axios from "axios";
import Swal from "sweetalert2";


const MyBookedTutors = () => {
    const { user } = useContext(AuthContext)
    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/allBookedData/${user?.email}`)
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [user?.email])
    console.log(courses)

    const handleReview = async (id) => {
        const {data} = await axios.patch(`http://localhost:5000/allBookedData/${id}`)
        if(data.acknowledged){
                        Swal.fire({
                            title: "Review Added Successfully!",
                            icon: "success",
                            draggable: true
                          });

        }

    }

    return (
        <div className="w-full">
            <h2 className="text-2xl font-extrabold py-6 text-center">Booked Tutors</h2>
            <div>
                <div className="">
                    <table className="table p-0 m-0 ">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Photo</th>
                                <th>Language</th>
                                <th>Price</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className="">
                            {
                                courses.map((course, index) =>

                                    <tr key={course._id} >
                                        <th>{index + 1}</th>
                                        <td>{course.Name}</td>
                                        <img className=" w-12 h-12 sm:w-20 sm:h-24 object-cover" src={course.image} alt="" />
                                        <td>{course.language}</td>
                                        <td>{course.price} tk</td>
                                        <td> <button onClick={() => handleReview(course.jobId
                                        )} className="border px-1 py-1 text-sm  sm:px-2 sm:py-1 rounded-full bg-blue-500 sm:text-lg sm:font-bold text-white">Review</button> </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default MyBookedTutors;