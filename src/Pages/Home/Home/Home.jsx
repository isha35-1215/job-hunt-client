import ApplyMe from "../ApplyMe/ApplyMe";
import Banner from "../Banner/Banner";
import Features from "../Features/Features";
import JobCategory from "../JobCategory/JobCategory";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <JobCategory></JobCategory>
            {/* extra sections----> */}
            <Features></Features>
            <ApplyMe></ApplyMe>       

        </div>
    );
};

export default Home;