import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Hybrid = () => {

    const [cards, setCards] = useState([]);

    useEffect(() => {
      fetch(`https://jobhunt-server.vercel.app/job/Hybrid`)
        .then((res) => res.json())
        .then((data) => setCards(data));
    }, []);



    return (
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
                            <Link to={`/job`}>
                                <button className="btn btn-primary w-full text-base text-white bg-pink-700 border-fuchsia-500 normal-case">See Details</button>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Hybrid;