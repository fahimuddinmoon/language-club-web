import axios from "axios";
import { useEffect, useState } from "react";
import CourseCard from "./CourseCard";


const FindTutors = () => {
    const [courses, setCourses] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        fetch(`http://localhost:5000/ALLCourse?search=${search}`)
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [search])

    return (
        <div>
            <div className="text-center">
                <label className="input input-bordered flex items-center gap-2 sm:w-72 sm:mx-auto my-8">
                    <input type="text" onBlur={e=>setSearch(e.target.value)} className="grow" placeholder="Search" />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd" />
                    </svg>
                </label>
            </div>
            <h2 className="text-3xl font-extrabold text-center my-5">Find Your Favorite Course</h2>
            <div className="sm:grid lg:grid-cols-4 sm:grid-cols-2 gap-5">
                {
                    courses.map(course => <CourseCard key={course._id} course={course}></CourseCard>)
                }
            </div>
        </div>
    );
};

export default FindTutors;