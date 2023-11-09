import { useContext, useState } from "react";
import swal from "sweetalert";
import "react-datepicker/dist/react-datepicker.css";
import ReactDatePicker from "react-datepicker";
import { AuthContext } from "../Providers/AuthProvider";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



const AddJob = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    const [startDate, setStartDate] = useState(new Date());
    const { user} = useContext(AuthContext);

    const handleAddJob = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const image = form.image.value;
        const title = form.title.value;
        const category = form.category.value;
        const salary = form.salary.value;
        const deadline = form.deadline.value;
        const description = form.description.value;
        const number = form.number.value;
        const jobData = { date, name, title, image, description, category, salary, deadline, number }
        console.log(jobData);

        fetch('https://jobhunt-server.vercel.app/job', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(jobData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    swal("Success", "Job is posted successfully", "success");
                }
            })
    }

    return (
        <div data-aos="zoom-in">
            <div className="max-w-7xl mx-auto rounded-md bg-cover bg-center">
                <img src="https://i.ibb.co/j6qFFpk/hands-holding-up-blue-letters-forming-word-jobs.jpg" alt="" className="min-w-0 lg:min-w-[1220px] max-h-[480px] bg-cover" />
            </div>
            <h2 className="text-center text-pink-700 text-4xl font-bold mt-5 mb-5">Post A Job</h2>
            <form onSubmit={handleAddJob}>
                <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 justify-center items-center" >
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Posted By</span>
                        </label>
                        <input type="text" name="name" defaultValue={user?.displayName} placeholder="" className="input input-bordered border-pink-600 w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Posting Date</span>
                        </label>
                        <input type="text" name="date" placeholder="" className="input input-bordered border-pink-600 w-full max-w-xs" />
                        {/* <ReactDatePicker selected={startDate}  name="date" className="input input-bordered border-pink-600 w-full max-w-xs" /> */}
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 justify-center items-center" >
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Job Category</span>
                        </label>
                        {/* <input type="text" name="brand" placeholder="" className="input input-bordered border-pink-600 w-full max-w-xs" /> */}
                        <select name="category" className="select select-bordered border-pink-600 w-full max-w-xs">
                            <option disabled selected>Select Category</option>
                            <option>OnSite</option>
                            <option>Remote</option>
                            <option>Hybrid</option>
                            <option>PartTime</option>
                        </select>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Job Title</span>
                        </label>
                        <input type="text" name="title" placeholder="" className="input input-bordered border-pink-600 w-full max-w-xs" />
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 justify-center items-center" >
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Salary Range</span>
                        </label>
                        <input type="text" name="salary" placeholder="" className="input input-bordered border-pink-600 w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Job image</span>
                        </label>
                        <input type="text" name="image" placeholder="" className="input input-bordered border-pink-600 w-full max-w-xs" />
                    </div>
                </div>
                <div className=" flex flex-col lg:flex-row gap-4 lg:gap-8 justify-center items-center" >
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Application Deadline</span>
                        </label>
                        <ReactDatePicker selected={startDate} onChange={(date) => setStartDate(date)} name="deadline" className="input input-bordered border-pink-600 w-full max-w-xs" />

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Applicants Number</span>
                        </label>
                        <input type="text" name="number" defaultValue={0} placeholder="" className="input input-bordered border-pink-600 w-full max-w-xs" />
                    </div>

                </div>

                <div className="mb-6 flex flex-col lg:flex-row gap-4 lg:gap-8 justify-center items-center">

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Job Description</span>
                        </label>
                        <input type="text" name="description" placeholder="" className="input input-bordered border-pink-600 w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text"></span>
                        </label>
                        <input type="submit" value='Add Job' className="mt-4 text-lg btn btn-secondary bg-pink-700 border-pink-700 text-white normal-case " />
                    </div>

                </div>

            </form>

        </div>
    );
};


export default AddJob;