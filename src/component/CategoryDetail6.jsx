import { useEffect, useState } from "react";
import CategoryDataShoe from "./CategoryDataShoe";


const CategoryDetail6 = () => {
    const [allData, setAllData] = useState([])
    const [sameData, setSameData] = useState([])
    useEffect(() => {
        fetch('https://language-course-server.vercel.app/addCourse')
            .then(res => res.json())
            .then(data => setAllData(data))
    }, [])
    useEffect(() => {
        const info = allData.filter(data => data.language === 'Chinese')
        setSameData(info)
    }, [allData])

    return (
        <div>
            <h3 className='text-3xl font-extrabold text-center my-5'> All English Tutors</h3>
            <div className='lg:grid lg:grid-cols-2 gap-4'>
                {
                   sameData.map(data=> <CategoryDataShoe key={data._id} data={data}></CategoryDataShoe>)
                }
            </div>
        </div>
    );
};

export default CategoryDetail6;