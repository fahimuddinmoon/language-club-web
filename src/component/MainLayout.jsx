import { Outlet } from "react-router-dom";
import NavBer from "./NavBer";
import Footer from "./Footer";
import { useContext } from "react";
import { AuthContext } from "./ContextAPI";


const MainLayout = () => {
    const { user , logout , dark ,setDark} = useContext(AuthContext)
    return (
        <div className={dark === true? 'bg-black text-white':''}>
            <div>
                <NavBer></NavBer>
            </div>
            <div >
                <Outlet></Outlet>
            </div>
            <div >
                <Footer></Footer>
            </div>

        </div>
    );
};

export default MainLayout;