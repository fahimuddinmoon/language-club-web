import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="text-center items-center h-screen mt-80">
            <p className="text-4xl font-bold pb-3">Page Not Found</p>
            <Link className="underline text-sm font-semibold text-blue-600" to='/'>Back To Home </Link>
        </div>
    );
};

export default ErrorPage;