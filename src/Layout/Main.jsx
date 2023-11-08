import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import { Helmet } from 'react-helmet';

const Main = () => {

    const location = useLocation();
    // Define a function to generate the page title based on the current route
    const getPageTitle = () => {
        switch (location.pathname) {
            case "/":
                return "JobHunt | Home";
            case "/allJobs":
                return "JobHunt | All Jobs";
            case "/appliedJobs":
                return "JobHunt | Applied Jobs"
            case "/myJobs":
                return "JobHunt | My Jobs"
            case "/login":
                return "JobHunt | Login"
            case "/Register":
                return "JobHunt | Register"
            case "/blogs":
                return "JobHunt | Blogs"
            case "/userProfile":
                return "JobHunt | User Profile"
            default:
                return "JobHunt";
        }
    };

    return (
        <div>
            <Helmet>
                <title>{getPageTitle()}</title>
                {/* Add default meta tags here */}
            </Helmet>
            <div>
                <Navbar></Navbar>

                <div className="max-w-screen-sm md:max-w-screen-md lg:max-w-screen-xl mx-auto font-poppins">
                    <Outlet></Outlet>
                </div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;