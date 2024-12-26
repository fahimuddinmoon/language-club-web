import React, { useEffect, useState } from 'react';
import CategoryDataShoe from './CategoryDataShoe';

const CategoryDetail = () => {
    const [allData, setAllData] = useState([])
    const [sameData, setSameData] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/addCourse')
            .then(res => res.json())
            .then(data => setAllData(data))
    }, [])
    useEffect(() => {
        const info = allData.filter(data => data.language === 'English')
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

export default CategoryDetail;