import { useContext, useEffect, useState } from "react";
import MyJobItems from "./MyJobItems";
import { AuthContext } from "../Providers/AuthProvider";
import AOS from 'aos';
import 'aos/dist/aos.css';



const MyJobs = () => {
    useEffect(() => {
        AOS.init();
      }, [])

    const { user } = useContext(AuthContext);
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch(`https://jobhunt-server.vercel.app/jobs/${user?.displayName}`, {credentials:'include'})
            .then((res) => res.json())
            .then((data) => {
                setCards(data);
            });
    }, []);

    return (
        <div data-aos="flip-down">
            <div className="max-w-7xl mx-auto rounded-md bg-cover bg-center">
                <img src="https://i.ibb.co/3vrkdws/job-career-hiring-recruitment-qualification-graphic.jpg" alt="" className="min-w-0 lg:min-w-[1220px] max-h-[480px] bg-cover" />
            </div>
            <h2 className="text-center text-pink-700 text-4xl font-bold mt-5 mb-5">My Jobs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 my-10 mx-auto">
            <table className="table">
                    {/* head */}
                    <thead>
                        <tr> 
                            <th className="text-xl font-bold text-pink-700">Posted by</th>
                            <th className="text-xl font-bold text-pink-700">Job Title</th>
                            <th className="text-xl font-bold text-pink-700">Category</th>
                            <th className="text-xl font-bold text-pink-700">Banner</th>
                            <th className="text-xl font-bold text-pink-700">Salary</th>
                            <th className="text-xl font-bold text-pink-700">Deadline</th>
                            <th className="text-xl font-bold text-pink-700">Description</th>
                            <th className="text-xl font-bold text-pink-700">Applicants</th>
                            <th className="text-xl font-bold text-pink-700"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cards.map(filter => <MyJobItems
                                key={filter._id }
                                filter={filter}
                                cards={cards}
                                setCards={setCards}
                            ></MyJobItems>)
                        }

                    </tbody>


                </table>
                {/* {data.map(item => 
                    <MyJobItems 
                    key={item._id} 
                    item={item} 
                    data={data} 
                    setData={setData} />
                )} */}
            </div>
        </div>
    );
};

export default MyJobs;