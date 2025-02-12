import { Link } from "react-router-dom";
import pic1 from '../../public/pic1.webp'
import pic2 from '../../public/pic2.webp'
import pic3 from '../../public/pic3.webp'

const Poster = () => {
    return (
        <div className="carousel w-full pt-24">
            <div id="slide1" className="carousel-item relative w-full ">
                <img
                    src={pic1}
                    className="  w-full h-96 sm:h-[630px] sm:object-cover opacity-40  p-2 " />
                <div className="absolute  left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="hidden lg:inline btn btn-circle mt-12 pt-4">❮</a>
                    <div className="text-center">
                        <h2 className="text-4xl font-bold md:px-32 lg:px-80 md:text-center mb-3">Unlock the World with Language</h2>
                        <p className="hidden md:inline text-sm font-semibold text-black opacity-10text-center items-center">Join our vibrant community of language enthusiasts and embark on a journey to fluency. <br /> Connect, learn, and grow with expert guidance and engaging activities!reflects your values and dreams.
                        </p>
                        <div className="text-center mt-6"><Link to='/find-tutors' className="border-3 bg-gradient-to-r from-blue-600 to-red-600 border-blue-500 px-3 py-2 rounded-lg text-lg font-bold text-white">Show More</Link></div>
                    </div>
                    <a href="#slide2" className="hidden lg:inline btn btn-circle mt-12 pt-4">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img
                    src={pic2}
                    className="   w-full h-96 sm:h-[630px] sm:object-cover opacity-40  p-2" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="hidden lg:inline btn btn-circle mt-16 pt-4">❮</a>
                    <div className="text-center">
                        <h2 className="text-4xl font-bold md:px-32 lg:px-80 md:text-center mb-3">Master a New Language with Fun & Ease!</h2>
                        <p className="hidden md:inline text-sm font-semibold text-black opacity-10 text-center">Interactive lessons, engaging conversations, and cultural immersion—all in one place. <br /> Start your journey to fluency today!
                        </p>
                        <div className="text-center mt-6"><Link to='/find-tutors' className="border-3 bg-gradient-to-r from-blue-600 to-red-600 border-blue-500 px-3 py-2 rounded-lg text-lg font-bold text-white">Show More</Link></div>
                    </div>
                    <a href="#slide3" className="hidden lg:inline btn btn-circle mt-16 pt-4">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img
                    src={pic3}
                    className="  w-full h-96 sm:h-[630px] sm:object-cover opacity-40  p-2" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="hidden lg:inline btn btn-circle mt-12 pt-4">❮</a>
                    <div className="text-center">
                        <h2 className="text-4xl font-bold md:px-32 lg:px-80 md:text-center mb-3">A Club for Language Lovers!</h2>
                        <p className="hidden md:inline text-sm font-semibold text-black opacity-10 text-center">Enhance your language skills, participate in fun activities, and build  <br /> friendships with people from different backgrounds.
                        </p>
                        <div className="text-center mt-6 "><Link to='/find-tutors' className="border-3 bg-gradient-to-r from-blue-600 to-red-600 border-blue-500 px-3 py-2 rounded-lg text-lg font-bold text-white">Show More</Link></div>
                    </div>
                    <a href="#slide1" className="hidden lg:inline btn btn-circle mt-12 pt-4">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Poster;