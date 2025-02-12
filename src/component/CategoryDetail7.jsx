import { useEffect, useState } from "react";
import CategoryDataShoe from "./CategoryDataShoe";


const CategoryDetail7 = () => {
    const [allData, setAllData] = useState([])
    const [sameData, setSameData] = useState([])
    useEffect(() => {
        fetch('https://language-course-server.vercel.app/addCourse')
            .then(res => res.json())
            .then(data => setAllData(data))
    }, [])
    useEffect(() => {
        const info = allData.filter(data => data.language === 'Arabic')
        setSameData(info)
    }, [allData])

    return (
        <div className={sameData.length === 0?'px-5 pt-24 h-screen' : 'w-full px-7 pt-24'}>
            <h3 className='text-3xl font-extrabold text-center pb-5 my-5'> All Arabic Tutors</h3>
            <div className='sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4'>
                {
                   sameData.map(data=> <CategoryDataShoe key={data._id} data={data}></CategoryDataShoe>)
                }
            </div>
        </div>
    );
};

export default CategoryDetail7;