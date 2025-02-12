import { Link } from "react-router-dom";


const CategoryDataShoe = ({ data }) => {
    console.log(data)
    const { Description, Name, email, image, language, price, review } = data
    return (
        <Link to='/find-tutors'>
            <div className=" border rounded-xl p-5  gap-9 mb-8">
                <img className="mx-auto w-40   sm:w-48 object-cover rounded-xl mb-6" src={image} alt="" />
                <div>

                    <p className="text-2xl font-bold mb-2"> Tutor Name : {Name}</p>
                    <p className="text-2xl font-bold mb-2"> Email : {email}</p>
                    <p title={Description} className="text-sm font-semibold text-gray-700 mb-2">Description : {Description.slice(0, 50)}</p>
                    <p className="text-lg font-bold mb-2">Category : {language}</p>
                    <p className="text-xl font-bold mb-2">Price : {price} tk</p>
                    <p className="text-xl font-bold mb-2">Review : {review}</p>

                </div>
            </div></Link>
    );
};

export default CategoryDataShoe;