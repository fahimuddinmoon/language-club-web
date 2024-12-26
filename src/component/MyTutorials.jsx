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
        fetch(`http://localhost:5000/allCourse/${user?.email}`)
            .then(res => res.json())
            .then(data => setCourses(data))
    }

    console.log(courses)
    const handleDelete = async (id) => {
        const { data } = await axios.delete(`http://localhost:5000/delete/${id}`)
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
        <div>
            <h2>My Tutorial</h2>
            <div className="overflow-x-auto">
                <table className="table table-xs">
                    <thead>
                        <tr>
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