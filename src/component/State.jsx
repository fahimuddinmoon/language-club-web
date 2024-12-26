import { useEffect, useState } from "react";


const State = () => {
    const [tutorCount, setTutorCount] = useState([])
    const [reviewCount, setReviewCount] = useState(0)
    const [languageCount, setLanguageCount] = useState([])
    const [userCount, setUserCount] = useState([])

    const [courses, setCourses] = useState([])
    const [booked, setBooked] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/addCourse')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    useEffect(() => {
        fetch('http://localhost:5000/allBookedData')
            .then(res => res.json())
            .then(data => setBooked(data))
    }, [])

    useEffect(() => {
        const Tutor = courses.map(course => course.email)
            .filter((email, index, self) => self.indexOf(email) === index)
        setTutorCount(Tutor)


        const Review = courses.map(course => course.review)
            .reduce((pre, current) => pre + current, 0)
        setReviewCount(Review)

        const Language = courses.map(course => course.language)
            .filter((language, index, self) => self.indexOf(language) === index)
        setLanguageCount(Language)
      

        const User = booked.map(user=> user.loggedEmail)
        .filter((loggedEmail,index,self) => self.indexOf(loggedEmail) === index)
        setUserCount(User)

    }, [courses,booked])



    return (
        <div className="sm:grid md:grid-cols-2 lg:grid-cols-4 gap-5 px-3">  
            <div className="px-9 py-5 border rounded-xl text-center shadow-lg mb-5">
                <p className="text-4xl font-bold">{tutorCount.length}+</p>
                <p className="text-lg font-bold text-gray-500">Experienced Tutor</p>
            </div>

            <div className="px-9 py-5 border rounded-xl text-center shadow-lg mb-5 hover:">
                <p className="text-4xl font-bold">{reviewCount}+</p>
                <p className="text-lg font-bold text-gray-500">5-Star Tutor Reviews</p>
            </div>

            <div className="px-9 py-5 border rounded-xl text-center shadow-lg mb-5 hover:">
                <p className="text-4xl font-bold">{languageCount.length}+</p>
                <p className="text-lg font-bold text-gray-500">Language</p>
            </div>
            <div className="px-9 py-5 border rounded-xl text-center shadow-lg mb-5 hover:">
                <p className="text-4xl font-bold">{userCount.length}+</p>
                <p className="text-lg font-bold text-gray-500">Total Users</p>
            </div>
        </div>
    );
};

export default State;