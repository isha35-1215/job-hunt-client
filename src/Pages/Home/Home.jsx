import Banner from "./Banner";
import JobCategory from "./JobCategory";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <JobCategory></JobCategory>
            <h1 className='mx-96'>This is Home!</h1>
        </div>
    );
};

export default Home;