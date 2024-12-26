import { Outlet } from "react-router-dom";
import NavBer from "./NavBer";
import Footer from "./Footer";


const MainLayout = () => {
    return (
        <div className="sm:w-11/12 mx-auto my-8">
            <div>
                <NavBer></NavBer>
            </div>
            <div className="pl-5 pr-5">
                <Outlet></Outlet>
            </div>
            <div className="p-5">
                <Footer></Footer>
            </div>

        </div>
    );
};

export default MainLayout;