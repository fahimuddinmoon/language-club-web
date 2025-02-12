import { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import { Link } from "react-router-dom";


const Display = () => {
    const [courses, setCourses] = useState([])


    useEffect(() => {
        fetch(`https://language-course-server.vercel.app/ALLCourse`)
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div className="">
            <h2 className="text-3xl font-extrabold text-center my-5">Your Journey To Fluency Starts Here</h2>
            <p className="text-sm font-bold text-center my-5 pb-5">Improve Your Communication Skill And Explore Different Cultures Through Language</p>
            <div className="sm:grid lg:grid-cols-4 sm:grid-cols-2 gap-5">
                {
                    courses.slice(0, 4).map(course => <CourseCard key={course._id} course={course}></CourseCard>)
                }
            </div>
            <button className="text-center block mx-auto mt-12"><Link className="border-3 bg-gradient-to-r from-blue-600 to-red-600 border-blue-500 px-3 py-2 rounded-lg text-lg font-bold text-white" to='/find-tutors'>View More</Link></button>
        </div>
    );
};

export default Display;