import { GrLanguage } from "react-icons/gr";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Category = () => {
    return (
        <div >
            <h2 className="text-3xl font-extrabold text-center my-12">All Categories</h2>
            <div className="sm:grid sm:grid-cols-3 md:gap-2 gap-4">

                <Link to='/category/1'>
                    <div className="flex justify-center items-center md:gap-2 gap-4 border rounded-xl shadow-lg mx-5 my-3 py-7 md:px-10  bg-gray-100">
                        <p className="text-xl font-bold text-red-600"><GrLanguage /></p>
                        <h3 className="text-2xl sm:text-lg text-black sm:font-semibold font-bold mx-4">English Tutors</h3>
                        <p className="text-xl font-bold text-black"><FaArrowRightLong /></p>
                    </div>
                </Link>

                <Link to='/category/2'>
                    <div className="flex justify-center items-center md:gap-2 gap-4 border rounded-xl shadow-lg mx-5 my-3 py-7 md:px-10 bg-gray-100">
                        <p className="text-xl font-bold text-red-600"><GrLanguage /></p>
                        <h3 className="text-2xl sm:text-lg text-black sm:font-semibold font-bold mx-4">Spanish Tutors</h3>
                        <p className="text-xl font-bold text-black"><FaArrowRightLong /></p>
                    </div>
                </Link>

                <Link to='/category/3'>
                    <div className="flex justify-center items-center md:gap-2 gap-4 border rounded-xl shadow-lg mx-5 my-3 py-7 md:px-10 bg-gray-100">
                        <p className="text-xl font-bold text-red-600"><GrLanguage /></p>
                        <h3 className="text-2xl sm:text-lg text-black sm:font-semibold font-bold mx-4">French Tutors</h3>
                        <p className="text-xl font-bold text-black"><FaArrowRightLong /></p>
                    </div>
                </Link>

                <Link to='/category/4'>
                    <div className="flex justify-center items-center md:gap-2 gap-4 border rounded-xl shadow-lg mx-5 my-3 py-7 md:px-10 bg-gray-100">
                        <p className="text-xl font-bold text-red-600"><GrLanguage /></p>
                        <h3 className="text-2xl sm:text-lg text-black sm:font-semibold font-bold mx-4">German Tutors</h3>
                        <p className="text-xl font-bold text-black"><FaArrowRightLong /></p>
                    </div>
                </Link>

                <Link to='/category/5'>
                    <div className="flex justify-center items-center md:gap-2 gap-4 border rounded-xl shadow-lg mx-5 my-3 py-7 md:px-10 bg-gray-100">
                        <p className="text-xl font-bold text-red-600"><GrLanguage /></p>
                        <h3 className="text-2xl sm:text-lg text-black sm:font-semibold font-bold mx-4">Italian Tutors</h3>
                        <p className="text-xl font-bold text-black"><FaArrowRightLong /></p>
                    </div>
                </Link>

                <Link to='/category/6'>
                    <div className="flex justify-center items-center md:gap-2 gap-4 border rounded-xl shadow-lg mx-5 my-3 py-7 md:px-10 bg-gray-100">
                        <p className="text-xl font-bold text-red-600"><GrLanguage /></p>
                        <h3 className="text-2xl sm:text-lg text-black sm:font-semibold font-bold mx-4">Chinese Tutors</h3>
                        <p className="text-xl font-bold text-black"><FaArrowRightLong /></p>
                    </div>
                </Link>

                <Link to='/category/7'>
                    <div className="flex justify-center items-center md:gap-2 gap-4 border rounded-xl shadow-lg mx-5 my-3 py-7 md:px-10 bg-gray-100">
                        <p className="text-xl font-bold text-red-600"><GrLanguage /></p>
                        <h3 className="text-2xl sm:text-lg text-black sm:font-semibold font-bold mx-4">Arabic Tutors</h3>
                        <p className="text-xl font-bold text-black"><FaArrowRightLong /></p>
                    </div>
                </Link>

                <Link to='/category/8'>
                    <div className="flex justify-center items-center md:gap-2 gap-4 border rounded-xl shadow-lg mx-5 my-3 py-7 md:px-10 bg-gray-100">
                        <p className="text-xl font-bold text-red-600"><GrLanguage /></p>
                        <h3 className="text-2xl sm:text-lg text-black sm:font-semibold font-bold mx-4">Japanese Tutors</h3>
                        <p className="text-xl font-bold text-black"><FaArrowRightLong /></p>
                    </div>
                </Link>

                <Link to='/category/9'>
                    <div className="flex justify-center items-center md:gap-2 gap-4 border rounded-xl shadow-lg mx-5 my-3 py-7 md:px-10 bg-gray-100">
                        <p className="text-xl font-bold text-red-600"><GrLanguage /></p>
                        <h3 className="text-2xl sm:text-lg text-black sm:font-semibold font-bold mx-4">Bangla Tutors</h3>
                        <p className="text-xl font-bold text-black"><FaArrowRightLong /></p>
                    </div>
                </Link>

            </div>
        </div>
    );
};

export default Category;