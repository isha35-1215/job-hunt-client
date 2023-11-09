import { useEffect, useState } from "react";
import AllJobsRow from "./AllJobsRow";

const AllJobs = () => {

    const [searchInput, setSearchInput] = useState('');
    const [cards, setCards] = useState([]);
    const [filteredCards, setFilteredCards] = useState([]);
    // console.log(cards);

    useEffect(() => {
        fetch('https://jobhunt-server.vercel.app/job')
            .then((res) => res.json())
            .then((data) => {
                setCards(data);
                setFilteredCards(data);
            });
    }, []);

    useEffect(() => {
        const filteredData = cards.filter((card) =>
            card.title.toLowerCase().includes(searchInput.toLowerCase())
        );
        setFilteredCards(filteredData);
    }, [searchInput, cards]);

    return (
        <div>
            <div className="max-w-7xl mx-auto rounded-md bg-cover bg-center">
                <img src="https://i.ibb.co/k5K4mrC/recruitment-jobs-career-hiring-vacancy-word.jpg" alt="" className="min-w-0 lg:min-w-[1220px] max-h-[480px] bg-cover" />
            </div>
            <div className="my-10 flex flex-col justify-center">
                <h1 className=' text-3xl text-center text-pink-800 font-bold'>Empower Your Journey</h1>
                <h1 className='py-4 text-4xl text-center text-pink-800 font-bold'>Find Your Perfect Fit Today!</h1>
                <div className="pb-10 form-control mx-auto">
                    <div className="input-group">
                        <input
                            type="text"
                            placeholder="Search by Job Title..."
                            className="input input-bordered border-pink-700"
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                        />
                        <button className="btn btn-secondary  bg-pink-700">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 mx-auto gap-12 my-6 px-12 md:px-20 lg:px-24 ">

                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th className="text-2xl font-bold text-pink-700">Posted By</th>
                            <th className="text-2xl font-bold text-pink-700">Posting Date</th>
                            <th className="text-2xl font-bold text-pink-700">Job Title</th>
                            <th className="text-2xl font-bold text-pink-700">Salary</th>
                            <th className="text-2xl font-bold text-pink-700">Deadline</th>
                            <th className="text-2xl font-bold text-pink-700"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filteredCards.map(filter => <AllJobsRow
                                key={filter._id}
                                filter={filter}
                            ></AllJobsRow>)
                        }

                    </tbody>


                </table>
            </div>

        </div>
    );
};

export default AllJobs;
