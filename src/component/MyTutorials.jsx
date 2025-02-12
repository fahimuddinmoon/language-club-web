import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./ContextAPI";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const MyTutorials = () => {

    const { user } = useContext(AuthContext)
    const [courses, setCourses] = useState([])

    useEffect(() => {
        info()
    }, [user?.email])

    const info = () => {
        fetch(`https://language-course-server.vercel.app/allCourse/${user?.email}`)
            .then(res => res.json())
            .then(data => setCourses(data))
    }

    console.log(courses)
    const handleDelete = async (id) => {
        const { data } = await axios.delete(`https://language-course-server.vercel.app/delete/${id}`)
        info()
        if (data.acknowledged) {
            Swal.fire({
                title: "Review Added Successfully!",
                icon: "success",
                draggable: true
            });

        }
    }



   
    return (
        <div className={courses.length <  5?'px-5 pt-24 h-screen' : 'px-7 pt-24'}>
            <h2 className="text-2xl text-center my-3  font-extrabold">My Tutorial</h2>
            <div className="overflow-x-auto">
                <table className="table table-xs">
                    <thead>
                        <tr className="text-blue-600">
                            <th>Image</th>
                            <th>Name</th>
                            <th>Language</th>
                            <th>Price</th>
                            <th>Review</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            courses.map((course, index) =>
                                <tr key={course._id}>
                                    <img className=" w-12 h-12 sm:w-20 sm:h-24 object-cover" src={course.image} alt="" />
                                    <td>{course.Name}</td>
                                    <td>{course.language}</td>
                                    <td>{course.price} tk</td>
                                    <td>{course.review}</td >
                                    <td >
                                        <button onClick={() => handleDelete(course._id)} className="mr-3 px-2 py-1 bg-red-700 rounded-xl text-white font-semibold mb-2">Delete</button>
                                        <Link to={`/update/${course._id}`}  className="px-2 py-1 bg-green-700 rounded-xl text-white font-semibold">Update</Link >
                                    </td>
                            
                                   
                                </tr>)
                        }
                    </tbody>
                </table>

            </div>


        </div>
    );
};


export default MyTutorials;