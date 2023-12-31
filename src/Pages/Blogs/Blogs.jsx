
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Blogs = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div data-aos="zoom-in">
            <div className="max-w-7xl mx-auto rounded-md bg-cover bg-center">
                <img src="https://i.ibb.co/sy8hs54/we-are-hiring-digital-collage.jpg" alt="" className="min-w-0 lg:min-w-[1220px] max-h-[480px] bg-cover" />
            </div>
            <div className="my-10">
                <h1 className=" m-6 lg:mx-48 text-center text-pink-700 text-2xl lg:text-4xl font-semibold">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                <p className="my-2 mx-4 text-xl font-normal"><span className="text-pink-600 font-semibold">Access Token:</span> An access token is a security credential that allows a client to access specific resources on a server. It is obtained after successful authentication and is typically short-lived. It authorizes specific actions on behalf of the user.</p>
                <p className="my-2 mx-4 text-xl font-normal"><span className="text-pink-600 font-semibold">Refresh Token:</span> A refresh token is used to obtain a new access token when the current one expires. It helps maintain a continuous session without requiring the user to re-authenticate frequently. Refresh tokens are usually long-lived and more secure than access tokens.</p>
                <p className="my-2 mx-4 text-xl font-normal"><span className="text-pink-600 font-semibold">Storing:</span> On the client-side, access tokens can be stored in memory or secure storage like browser storage with encryption. Refresh tokens should be securely stored, preferably in memory or secure HTTP-only cookies, to prevent security vulnerabilities such as XSS and CSRF attacks.</p>
            </div>
            <div className="my-10">
                <h1 className="m-6 lg:mx-48 text-center text-pink-700 text-2xl lg:text-4xl font-semibold">What is express js? What is Nest JS?</h1>
                <p className="my-2 mx-4 text-xl font-normal"><span className="text-pink-600 font-semibold">Express.js: </span>Express.js is a popular web application framework for Node.js, designed for building web applications and APIs. It provides a simple interface and a variety of features to handle HTTP requests, routing, middleware, and more, making it a versatile choice for developing server-side applications in JavaScript.</p>
                <p className="my-2 mx-4 text-xl font-normal"><span className="text-pink-600 font-semibold">Nest JS: </span>Nest JS is a progressive Node.js framework that is built with and fully supports TypeScript. It is designed to provide an efficient, reliable, and scalable way to build server-side applications. NestJS leverages modern JavaScript features and focuses on developer productivity, maintainability, and robustness. It also offers a modular architecture, dependency injection, and built-in support for various tools and libraries, making it a powerful option for building enterprise-grade applications.</p>
            </div>
            <div className="my-10">
            <h1 className="my-6 lg:mx-48 text-center text-pink-700 text-2xl lg:text-4xl font-semibold">Explain My Code:</h1>
            <p className="my-2 mx-4 text-xl font-normal"><span className="text-pink-600 font-semibold">AllJobs Component: </span><br/>The AllJobs component is a React functional component that displays a list of job cards. It fetches job data from a local server and maps through the data to render each job card. The component also includes a search bar for filtering jobs based on user input.</p>
            <p className="my-2 mx-4 text-xl font-normal"><span className="text-pink-600 font-semibold">JobDetails Component: </span><br/>The JobDetails component is another React functional component that displays detailed information about a specific job. It retrieves the specific job's data from the router context and displays details such as the job title, description, and application deadline. It also provides a form for users to apply for the job, handling form submissions and displaying alerts based on certain conditions.</p>
            <p className="my-2 mx-4 text-xl font-normal"><span className="text-pink-600 font-semibold">AuthContext Component: </span><br/>The AuthContext component is a provider that allows its child components to subscribe to the current authentication context. It provides information about the current user and their authentication status to the consuming components.</p>
            <p className="my-2 mx-4 text-xl font-normal"><span className="text-pink-600 font-semibold">Providers Directory: </span><br/>The "Providers" directory likely contains the necessary provider components for managing the application's context. In this case, the AuthProvider is one such provider that likely manages the user's authentication status.</p>
            <p className="my-2 mx-4 text-xl font-normal"><span className="text-pink-600 font-semibold">SweetAlert Library: </span><br/>The swal function is part of the SweetAlert library, which provides customizable and visually appealing alert pop-ups for web applications. It is used in the JobDetails component to display success and error messages when applying for a job.</p>
            <p className="my-2 mx-4 text-xl font-normal"><span className="text-pink-600 font-semibold">React Router: </span><br/>The React Router library is used to handle client-side routing in the application. It enables navigation between different components based on the current URL. The useLoaderData hook provided by React Router is used to retrieve data from the router context.</p>
            <p className="my-2 mx-4 text-xl font-normal"><span className="text-pink-600 font-semibold">MyJobs component: </span><br/>This component fetches and displays a list of jobs posted by the authenticated user. It fetches the job data from the server based on the user's display name and stores it in the cards state variable. The useEffect hook is used to fetch the data when the component mounts.</p>
            <p className="my-2 mx-4 text-xl font-normal"><span className="text-pink-600 font-semibold">MyJobItems component: </span><br/> This component is responsible for rendering job items. It takes in props such as filter, cards, and setCards, and uses the information to render job details, including fields such as name, title, salary, deadline, date, description, image, category, and number. The component also handles updates and deletions of job items.</p>
            <p className="my-2 mx-4 text-xl font-normal"><span className="text-pink-600 font-semibold">AppliedJobs component: </span><br/>The AppliedJobs component is a React module that manages the display of applied jobs data, allowing users to filter the results by category and download the list as a PDF. The component imports necessary dependencies such as AppliedJobsRow, useContext, useEffect, useState, usePDF, and the AuthContext from their respective files. It initializes state variables to manage user input and fetched data, utilizing the useEffect hook to fetch and filter the applied jobs data based on the current user's display name. The component renders various elements, including headings, a dropdown menu for category filtering, a button for PDF download, and a table that displays the applied job data. The AppliedJobsRow component is used to render each row in the table based on the filtered data.</p>
            <p className="my-2 mx-4 text-xl font-normal"><span className="text-pink-600 font-semibold">JobCategory component: </span><br/>The JobCategory component is a React module responsible for displaying job categories and details, allowing users to view job listings by different categories. It imports several dependencies, including useContext, useEffect, and useState from React, and Link, Tab, Tabs, TabList, and TabPanel from the react-tabs library. The component fetches job data from a specified API endpoint using the useEffect hook and stores it in the cards state variable. It renders a heading, a tabbed interface for different job categories, and a corresponding panel for each category. The component also maps through the fetched data to display job cards, with details such as the name of the poster, job title, posting date, application deadline, salary range, and the number of applicants. Each job card includes a button that links to a specific job's details page. Additionally, the component includes functionality to handle the case when a user is not logged in, displaying a warning message using the swal library.</p>

            </div>
        </div>
    );
};

export default Blogs;