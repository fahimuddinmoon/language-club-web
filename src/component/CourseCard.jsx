
import { Link } from "react-router-dom";



const CourseCard = ({ course }) => {
 
    const {_id, Name, email, language, Description, price, image, review } = course
    return (
        <div className="card card-compact  shadow-xl border">
            <figure>
                <img
                className="w-56 h-56 object-cover p-3 "
                    src={image}
                    alt="" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold">Tutor Name :- {Name}</h2>
                <p className="text-xl font-semibold mb-2">Category :- {language}</p>
                <p className="text-xl font-semibold mb-2">Price :- {price}</p>
                <p className="text-xl font-semibold mb-2">Review :- {review}</p>
                <div className="card-actions justify-end">
                    <Link to={`/detail/${_id}`} className="btn font-bold bg-blue-600 text-white">Details</Link>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;