import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddJob from "../Pages/AddJob/AddJob";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "../Pages/Providers/PrivateRoute";
import UserProfile from "../Pages/UserProfile/UserProfile";
import Home from "../Pages/Home/Home/Home";
import AllJobs from "../Pages/AllJobs/AllJobs";
import Blogs from "../Pages/Blogs/Blogs";
import AppliedJobs from "../Pages/AppliedJobs/AppliedJobs";
import MyJobs from "../Pages/MyJobs/MyJobs";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import JobDetails from "../Pages/JobDetails/JobDetails";
import UpdateMyJobs from "../Pages/UpdateMyJobs/UpdateMyJobs";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/allJobs',
            element: <AllJobs></AllJobs>
        },
        {
            path: '/job/:id',
            element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
            loader: ({params}) => fetch(`http://localhost:5000/jobDetails/${params.id}`)

        },
        {
            path: '/addJob',
            element: <AddJob></AddJob>
        },
        {
            path: '/appliedJobs',
            element: <PrivateRoute><AppliedJobs></AppliedJobs></PrivateRoute>
            // loader: ({params}) => fetch(`http://localhost:5000/applied/${params.applicant}`)
        },
        {
            path: '/myJobs',
            element: <PrivateRoute><MyJobs></MyJobs></PrivateRoute>
            // loader: ({params}) => fetch(`http://localhost:5000/jobs/${params.name}`)
        },
        {
            path: '/updateMyJobs/:id',
            element: <PrivateRoute><UpdateMyJobs></UpdateMyJobs></PrivateRoute>,
            loader: ({params}) => fetch(`http://localhost:5000/jobDetails/${params.id}`)
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/blogs',
            element: <Blogs></Blogs>
        },
        {
            path: '/userProfile',
            element: <PrivateRoute><UserProfile></UserProfile></PrivateRoute>
        }
       
      ]
    },
  ]);


  export default router