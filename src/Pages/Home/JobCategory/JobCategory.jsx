import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import swal from 'sweetalert';
import OnSiteJob from './OnSiteJob';
import RemoteJob from './RemoteJob';
import Hybrid from './Hybrid';
import PartTime from './PartTime';
import { AuthContext } from '../../Providers/AuthProvider';

const JobCategory = () => {
    const { user } = useContext(AuthContext); // Replace with your actual AuthContext
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('https://jobhunt-server.vercel.app/job')
            .then((res) => res.json())
            .then((data) => setCards(data));
    }, []);

    const handleViewDetails = () => {
        if (!user) {
            swal("You are not currently logged in!", "Log in first", "error");
        }
    };

    return (
        <div className='my-10'>
            <h1 className='py-4 text-4xl text-center text-pink-900 font-bold'>Find Your Desired Job By Category</h1>
            <Tabs>
                <TabList className='text-sm lg:text-2xl text-pink-700 font-semibold'>
                    <Tab>All Jobs</Tab>
                    <Tab>On Site Job</Tab>
                    <Tab>Remote Job</Tab>
                    <Tab>Hybrid</Tab>
                    <Tab>Part Time</Tab>
                </TabList>

                <TabPanel className='text-base text-pink-700 font-medium'>
                    <div className="grid grid-cols-1 md:grid-cols-3 mx-auto gap-12 my-6 px-12 md:px-20 lg:px-24">
                        {cards.map((cart) => (
                            <div key={cart.id} className="card w-96 bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <h2 className="card-title text-xl text-pink-700 font-semibold">Posted By: {cart.name}</h2>
                                    <h2 className="card-title text-xl text-pink-700 font-semibold">Job Title: {cart.title}</h2>
                                    <h2 className="card-title text-xl text-pink-700 font-semibold">Job Posted on: {cart.date}</h2>
                                    <h2 className="card-title text-xl text-pink-700 font-semibold">Application Deadline: {cart.deadline}</h2>
                                    <h2 className="card-title text-xl text-pink-700 font-semibold">Salary Range: {cart.salary}</h2>
                                    <h2 className="card-title text-xl text-pink-700 font-semibold">Applicants Number: {cart.number}</h2>
                                    <div className="card-actions">
                                        <Link to={`/job/${cart._id}`} onClick={handleViewDetails}>
                                            <button className="btn btn-primary w-full text-base text-white bg-pink-700 border-fuchsia-500 normal-case">View Details</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </TabPanel>
                <TabPanel className='text-base text-pink-700 font-medium'>
                    <OnSiteJob></OnSiteJob>
                </TabPanel>
                <TabPanel className='text-base text-pink-700 font-medium'>
                    <RemoteJob></RemoteJob>
                </TabPanel>
                <TabPanel className='text-base text-pink-700 font-medium'>
                    <Hybrid></Hybrid>
                </TabPanel>
                <TabPanel className='text-base text-pink-700 font-medium'>
                    <PartTime></PartTime>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default JobCategory;
