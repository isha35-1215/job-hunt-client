import { useLoaderData, useParams } from "react-router-dom";
import swal from "sweetalert";

const UpdateMyJobs = () => {

    const { id } = useParams();
    const JobData = useLoaderData();
    const { title, salary, deadline, date, description, image, category, number } = JobData;
    // console.log(productData);

    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const image = form.image.value;
        const deadline = form.deadline.value;
        const date = form.date.value;
        const salary = form.salary.value;
        const description = form.description.value;
        const number = form.number.value;
        const category = form.category.value;

        const updateData = { title, image, deadline, date, salary, description, number, category };
        console.log(updateData);



        fetch(`http://localhost:5000/jobDetails/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    swal("Success", "Your product updated successfully", "success");
                }
            })
    }




    return (
        <div className="">
            <h2 className="text-center text-pink-700 text-4xl font-bold mt-5 mb-5">Update Job Details</h2>
            <form onSubmit={handleUpdate}>
                <div className="flex flex-col lg:flex-row gap-8 justify-center items-center" >
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Posting Date</span>
                        </label>
                        <input type="text" name="date" defaultValue={date} placeholder="" className="input input-bordered border-pink-600 w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        {/* <input type="text" name="category" defaultValue={category} placeholder="" className="input input-bordered border-pink-600 w-full max-w-xs" /> */}
                        <select name="category" defaultValue={category} className="select select-bordered border-pink-600 w-full max-w-xs">
                            <option disabled selected>Select Category</option>
                            <option>OnSite</option>
                            <option>Remote</option>
                            <option>Hybrid</option>
                            <option>PartTime</option>
                        </select>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-8 justify-center items-center" >
                    {/* brand input */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Job Title</span>
                        </label>
                        <input type="text" name="title" defaultValue={title} placeholder="" className="input input-bordered border-pink-600 w-full max-w-xs" />
                    </div>
                    {/* type input */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Banner Image</span>
                        </label>
                        <input type="text" name="image" defaultValue={image} placeholder="" className="input input-bordered border-pink-600 w-full max-w-xs" />
                    </div>
                </div>
                {/* price input */}
                <div className="flex flex-col lg:flex-row gap-8 justify-center items-center" >
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Job Salary</span>
                        </label>
                        <input type="text" name="salary" defaultValue={salary} placeholder="" className="input input-bordered border-pink-600 w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Application Deadline</span>
                        </label>
                        <input type="text" name="deadline" defaultValue={deadline} placeholder="" className="input input-bordered border-pink-600 w-full max-w-xs" />
                    </div>
                </div>
                {/* rating input field */}
                <div className=" flex flex-col lg:flex-row gap-8 justify-center items-center" >

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Job Description</span>
                        </label>
                        <input type="text" name="description" defaultValue={description} placeholder="" className="input input-bordered border-pink-600 w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Applicants Number</span>
                        </label>
                        <input type="text" name="number" defaultValue={number} placeholder="" className="input input-bordered border-pink-600 w-full max-w-xs" />
                    </div>

                </div>
                <div>
                    <div className="mb-6 form-control w-full max-w-2xl mx-auto">
                        <label className="label">
                            <span className="label-text"></span>
                        </label>

                        <input type="submit" value='Update Product' className=" mt-4  btn btn-primary bg-pink-700 border-pink-700 text-white normal-case " />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default UpdateMyJobs;



