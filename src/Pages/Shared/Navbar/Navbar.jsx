import { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import { AuthContext } from "../../Providers/AuthProvider";



const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
    };

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }

    const links = <>
        <li><NavLink to="/" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ?
                "text-pink-700 text-lg font-bold underline" : ""
        }>Home</NavLink></li>

        <li><NavLink to="/allJobs" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ?
                "text-pink-700 text-lg font-bold underline" : ""
        }>AllJobs</NavLink></li>


        {user && <li><NavLink to="/appliedJobs" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ?
                "text-pink-700 text-lg font-bold underline" : ""
        }>AppliedJobs</NavLink></li>}

        {user && <li><NavLink to="/addJob" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ?
                "text-pink-700 text-lg font-bold underline" : ""
        }>AddJob</NavLink></li>}

        {user && <li><NavLink to="/myJobs" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ?
                "text-pink-700 text-lg font-bold underline" : ""
        }>My Jobs</NavLink></li>}

        <li><NavLink to="/blogs" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ?
                "text-pink-700 text-lg font-bold underline" : ""
        }>Blogs</NavLink></li>

        {user && <li><NavLink to="/userProfile" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ?
                "text-pink-700 text-lg font-bold underline" : ""
        }>UserProfile</NavLink></li>}


    </>


    return (

        <div className={`bg-base-100 my-4 max-w-screen-sm md:max-w-screen-md lg:max-w-screen-xl mx-auto font-poppins`} data-theme={theme}>
            <div className="navbar justify-between rounded-xl mt-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] pl-0 shadow bg-base-100 rounded-box w-52 gap-2">
                            {links}
                        </ul>
                    </div>

                    <a className="btn btn-ghost normal-case invisible lg:visible  text-pink-800  text-3xl font-bold">
                        <img className='w-[40px] h-[40px] rounded-full' src="https://i.ibb.co/6DXzgfX/jobhuntlogo.png" alt="icon1" border="0" />JobHunt</a>
                </div>
                <div className="navbar-center hidden lg:flex gap-2">
                    <ul className="menu menu-horizontal px-1 text-lg">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    <MdDarkMode className="text-5xl" onClick={toggleTheme}></MdDarkMode>
                    <div className="dropdown dropdown-hover">
                        <label tabIndex={0}>
                            {user ?
                                <img className='rounded-full w-12 h-12 ' src={user?.photoURL} alt="" />
                                :
                                <FaUserCircle className='text-4xl'></FaUserCircle>
                            }
                        </label>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu shadow bg-base-100 rounded-box w-20 lg:w-40">
                            <li><a>{user?.displayName}</a></li>
                        </ul>
                    </div>


                    {
                        user ?
                            <button onClick={handleSignOut} className='btn btn-secondary text-white bg-pink-700 border-pink-700 normal-case'>LogOut</button>
                            :
                            <button className='btn btn-secondary text-white bg-pink-700 border-pink-600 normal-case'>
                                <Link to='/login'>Login</Link>
                            </button>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;