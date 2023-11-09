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
import AOS from 'aos';
import 'aos/dist/aos.css';




const JobCategory = () => {
    useEffect(() => {
        AOS.init();
      }, [])
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
        <div className='my-6 lg:my-16'>
            <h1 className='py-4 text-3xl lg:text-4xl text-center text-pink-900 font-bold'>Find Your Desired Job By Category</h1>
            <Tabs className="my-4">
                <TabList className='text-sm lg:text-2xl text-pink-700 font-semibold text-center border-b-2 border-pink-600'>
                    <Tab>All Jobs</Tab>
                    <Tab>On Site Job</Tab>
                    <Tab>Remote Job</Tab>
                    <Tab>Hybrid</Tab>
                    <Tab>Part Time</Tab>
                </TabList>

                <TabPanel className='text-base text-pink-700 font-medium'>
                    <div className="grid grid-cols-1 md:grid-cols-3 mx-auto gap-12 my-10 px-12 md:px-20 lg:px-24">
                        {cards.map((cart) => (
                            <div data-aos="zoom-in" key={cart.id} className="card card-compact w-96 h-[500px] bg-base-100 shadow-xl border-pink-500 border-[1px]">
                                  <figure><img className='h-[200px] w-full' src={cart.image} alt="" /></figure>
                                <div className="card-body mx-4">
                                    <h2 className="card-title text-lg text-pink-700 font-medium">Posted By: {cart.name}</h2>
                                    <h2 className="card-title text-lg text-pink-700 font-medium">Job Title: {cart.title}</h2>
                                    <h2 className="card-title text-lg text-pink-700 font-medium">Job Posted on: {cart.date}</h2>
                                    <h2 className="card-title text-lg text-pink-700 font-medium">Application Deadline: {cart.deadline}</h2>
                                    <h2 className="card-title text-lg text-pink-700 font-medium">Salary Range: {cart.salary}</h2>
                                    <h2 className="card-title text-lg text-pink-700 font-medium">Applicants Number: {cart.number}</h2>
                                    <div className="card-actions">
                                        <Link to={`/job/${cart._id}`} onClick={handleViewDetails}>
                                            <button className="btn btn-secondary w-80 text-base text-white bg-pink-700 border-pink-500 normal-case">View Details</button>
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
