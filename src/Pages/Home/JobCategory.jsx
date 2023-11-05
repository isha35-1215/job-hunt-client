import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const JobCategory = () => {
    return (
        <div className='my-10'>
            <h1 className='py-4 text-4xl text-center text-pink-900 font-bold'>Find Your Desired Job By Category</h1>
            <Tabs>
                <TabList className='text-2xl text-pink-700 font-semibold'>
                    <Tab>All Jobs</Tab>
                    <Tab>On Site Job</Tab>
                    <Tab>Remote Job</Tab>
                    <Tab>Hybrid</Tab>
                    <Tab>Part Time</Tab>
                </TabList>
                
                <TabPanel className='text-xl text-pink-700 font-medium'>
                    <h2>Sales Director</h2>
                    <h2>Implementation Analyst</h2>
                    <h2>Web Developer</h2>
                    <h2>Graphics Designer</h2>
                    <h2>Senior UX Designer</h2>
                    <h2>Data Scienties</h2>
                    <h2>Video Editor</h2>
                    <h2>Receptionist</h2>
                </TabPanel>
                <TabPanel className='text-xl text-pink-700 font-medium'>
                    <h2>Sales Director</h2>
                    <h2>Implementation Analyst</h2>
                </TabPanel>
                <TabPanel className='text-xl text-pink-700 font-medium'>
                    <h2>Web Developer</h2>
                    <h2>Graphics Designer</h2>
                </TabPanel>
                <TabPanel className='text-xl text-pink-700 font-medium'>
                    <h2>Senior UX Designer</h2>
                    <h2>Data Scienties</h2>
                </TabPanel>
                <TabPanel className='text-xl text-pink-700 font-medium'>
                    <h2>Video Editor</h2>
                    <h2>Receptionist</h2>
                </TabPanel>
                
            </Tabs>
        </div>
    );
};

export default JobCategory;