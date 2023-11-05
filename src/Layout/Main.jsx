import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const Main = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto font-poppins">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Main;