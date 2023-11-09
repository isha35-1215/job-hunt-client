import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const OnSiteJob = () => {


    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch(`https://jobhunt-server.vercel.app/job/OnSite`)
            .then((res) => res.json())
            .then((data) => setCards(data));
    }, []);


    return (
        <div className="grid grid-cols-1 md:grid-cols-3 mx-auto gap-12 my-6 px-12 md:px-20 lg:px-24">
            {cards.map((cart) => (
                <div key={cart.id} className="card card-compact w-96 h-[500px] bg-base-100 shadow-xl border-pink-500 border-[1px]">
                <figure><img className='h-[200px] w-full' src={cart.image} alt="" /></figure>
              <div className="card-body mx-4">
                  <h2 className="card-title text-lg text-pink-700 font-medium">Posted By: {cart.name}</h2>
                  <h2 className="card-title text-lg text-pink-700 font-medium">Job Title: {cart.title}</h2>
                  <h2 className="card-title text-lg text-pink-700 font-medium">Job Posted on: {cart.date}</h2>
                  <h2 className="card-title text-lg text-pink-700 font-medium">Application Deadline: {cart.deadline}</h2>
                  <h2 className="card-title text-lg text-pink-700 font-medium">Salary Range: {cart.salary}</h2>
                  <h2 className="card-title text-lg text-pink-700 font-medium">Applicants Number: {cart.number}</h2>
                        <div className="card-actions">
                            <Link to={`/job/${cart._id}`}>
                            <button className="btn btn-secondary w-80 text-base text-white bg-pink-700 border-pink-500 normal-case">View Details</button>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default OnSiteJob;