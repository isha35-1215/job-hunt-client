import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import swal from "sweetalert";
import axios from "axios";
import { Helmet } from "react-helmet";

const JobDetails = () => {
    const jobInfo = useLoaderData();
    const { _id, name, title, image, date, deadline, number, salary, description, category } = jobInfo;
    const { user } = useContext(AuthContext);
    const today = new Date();
    console.log(today);
    // const formattedDate = `${today.getMonth()+1}/${today.getDate()}/${today.getFullYear()}`;
    // console.log(formattedDate);

    const deadlineDate = new Date(deadline);
    console.log(deadlineDate);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const appliedName = form.name.value;
        const email = form.email.value;
        const resume = form.resume.value;

        const applied = { applicant: appliedName, email, resume, name, title, deadline, date, salary, category };
        console.log(applied);




        if (user?.displayName === name) {
            swal("Sorry!!", "You can't apply for your own job!", "error");
        }

        else {
            console.log(applied);

            fetch('https://jobhunt-server.vercel.app/applied', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(applied),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    swal("Success", "Your application has been submitted successfully!", "success");
                    document.getElementById('my_modal_1').close();
                })
                .catch((error) => {
                    console.log(error);
                });

            const applyNum = parseInt(number);
            const updateNumber = applyNum + 1;
            console.log(updateNumber);
            const updateUrl = `https://jobhunt-server.vercel.app/job/${_id}`
            axios.patch(updateUrl, { number: updateNumber })
                .then(res => {
                    console.log(res.data);
                })


        }


    };

    return (
        <div key={_id}>
            <Helmet>
                <title>JobHunt | Job Details</title>
                <meta name="description" content="This is a description of my page." />
            </Helmet>
            <div className="max-w-7xl mx-auto rounded-md bg-cover bg-center">
                <img src={image} alt={name} className="min-w-0 lg:min-w-[1220px] max-h-[450px] bg-cover" />
            </div>
            <div className="text-neutral-content mx-20">
                <h1 className="pt-10 text-2xl font-semibold text-pink-900">
                    Posted By: {name}
                </h1>
                <h1 className="pt-10 text-2xl font-semibold text-pink-900">
                    Posting Date: {date}
                </h1>
                <h1 className="pt-6 text-2xl font-semibold text-pink-900">
                    Category: {category}
                </h1>
                <h1 className="pt-6 text-2xl font-semibold text-pink-900">
                    Title: {title}
                </h1>
                <h1 className="pt-6 text-2xl font-semibold text-pink-900">
                    Salary Range: {salary}
                </h1>
                <h1 className="pt-6 text-2xl font-semibold text-pink-900">
                    Application Deadline: {deadline}
                </h1>
                <h1 className="pt-6 text-2xl font-semibold text-pink-900">
                    Number of Applicants: {number}
                </h1>
                <p className="pt-6 text-xl font-medium text-pink-700">
                    Job Description: {description}
                </p>
                <div className="flex justify-center">
                    <button className="btn btn-secondary bg-pink-700 text-base normal-case text-white px-8 m-6" onClick={() => {
                        if (today > deadlineDate) {
                            console.log('denied');
                            swal("Sorry!!", "Application Deadline is over!", "error");
                            return;
                        }
                        else if (user?.displayName !== name) {
                            document.getElementById('my_modal_1').showModal();
                        }
                        else {
                            swal("Sorry!!", "You can't apply for your own job!", "error");
                        }
                    }}>Apply</button>
                    <dialog id="my_modal_1" className="modal">
                        <div className="modal-box">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-sm btn-circle btn-ghost text-pink-600 font-extrabold text-2xl absolute right-6 top-6">✕</button>
                            </form>
                            <form onSubmit={handleSubmit}>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Applicants Name</span>
                                    </label>
                                    <input type="text" name="name" defaultValue={user?.displayName} placeholder="" className="input input-bordered border-pink-600 w-full max-w-xs" />
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Applicants Email</span>
                                    </label>
                                    <input type="text" name="email" defaultValue={user?.email} placeholder="" className="input input-bordered border-pink-600 w-full max-w-xs" />
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Applicants Resume</span>
                                    </label>
                                    <input type="text" name="resume" placeholder="" className="input input-bordered border-pink-600 w-full max-w-xs" />
                                </div>
                                <div className="modal-action">
                                    <Link to="/appliedJobs">
                                        <button type="submit" className="btn btn-secondary bg-pink-700 text-base normal-case text-white px-4">Submit</button>
                                    </Link>
                                </div>
                            </form>
                            {/* <button  className="btn btn-secondary bg-pink-700 text-base normal-case text-white px-4" onClick={() => {
                                    document.getElementById('my_modal_1').close();
                                }}>Close</button> */}
                        </div>
                    </dialog>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;
