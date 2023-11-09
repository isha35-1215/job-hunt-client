import AppliedJobsRow from "./AppliedJobsRow";
import { useContext, useEffect, useState } from "react";
import { usePDF } from "react-to-pdf";
import { AuthContext } from "../Providers/AuthProvider";
import AOS from 'aos';
import 'aos/dist/aos.css';



const AppliedJobs = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    const { toPDF, targetRef } = usePDF({ filename: 'page.pdf' });

    const [searchInput, setSearchInput] = useState('');
    const [filteredCards, setFilteredCards] = useState([]);


    const { user } = useContext(AuthContext);
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch(`https://jobhunt-server.vercel.app/applied/${user?.displayName}`, {credentials:'include'})
            .then((res) => res.json())
            .then((data) => {
                setCards(data);
                setFilteredCards(data);
            });
    }, []);

    useEffect(() => {
        const filteredData = cards.filter((card) =>
            searchInput === '' || card.category.toLowerCase() === searchInput.toLowerCase()
        );
        setFilteredCards(filteredData);
    }, [searchInput, cards]);

    return (
        
            <div data-aos="zoom-out">
                <div className="max-w-7xl mx-auto rounded-md bg-cover bg-center">
                <img src="https://i.ibb.co/zJBk28f/rag-dolls-with-word-new-job.jpg" alt="" className="min-w-0 lg:min-w-[1200px] max-h-[450px] bg-cover" />
            </div>
                <h2 className="text-center text-pink-700 text-4xl font-bold mt-5 mb-5">Applied Jobs</h2>
                <div className="flex justify-between">
                <select
                    name="category"
                    className="select select-bordered border-pink-600 w-full max-w-xs "
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                >
                    <option disabled value="">Filter By Category</option>
                    <option value="OnSite">OnSite</option>
                    <option value="Remote">Remote</option>
                    <option value="Hybrid">Hybrid</option>
                    <option value="PartTime">PartTime</option>
                </select>
                <button className="btn btn-secondary text-base normal-case bg-pink-600 mx-4" onClick={() => toPDF()}>Download PDF</button>
                </div>

                <div ref={targetRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 my-10 mx-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th className="text-lg font-bold text-pink-700">Applicant</th>
                                <th className="text-lg font-bold text-pink-700">Email</th>
                                <th className="text-lg font-bold text-pink-700">Resume</th>
                                <th className="text-lg font-bold text-pink-700">Job Title</th>
                                <th className="text-lg font-bold text-pink-700">Category</th>
                                <th className="text-lg font-bold text-pink-700">Posted By</th>
                                <th className="text-lg font-bold text-pink-700">Posting Date</th>
                                <th className="text-lg font-bold text-pink-700">Salary</th>
                                <th className="text-lg font-bold text-pink-700">Deadline</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredCards.map((filter) => (
                                <AppliedJobsRow key={filter._id} filter={filter} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        
    );
};

export default AppliedJobs;
