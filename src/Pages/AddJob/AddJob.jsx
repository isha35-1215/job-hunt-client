import swal from "sweetalert";


const AddJob = () => {
    const handleAddJob = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const title = form.title.value;
        const category = form.category.value;
        const salary = form.salary.value;
        const deadline = form.deadline.value;
        const number = form.number.value;
        const jobInfo = { date, name, title, category, salary, deadline, number }
        console.log(jobInfo);


        fetch('https://b8a10-brandshop-server-side-isha35-1215.vercel.app/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(jobInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    swal("Success", "Your product added successfully", "success");
                }
            })
    }

    return (
        <div className="">
            <h2 className="text-center text-pink-700 text-4xl font-bold mt-5 mb-5">Post A Job</h2>
            <form onSubmit={handleAddJob}>
                <div className="flex flex-col lg:flex-row gap-8 justify-center items-center" >
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Posted By</span>
                        </label>
                        <input type="text" name="name" placeholder="" className="input input-bordered border-pink-600 w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Posting Date</span>
                        </label>
                        <input type="text" name="date" placeholder="" className="input input-bordered border-pink-600 w-full max-w-xs" />
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-8 justify-center items-center" >
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Job Category</span>
                        </label>
                        {/* <input type="text" name="brand" placeholder="" className="input input-bordered border-pink-600 w-full max-w-xs" /> */}
                        <select name="Category" className="select select-bordered border-pink-600 w-full max-w-xs">
                            <option disabled selected>Select Category</option>
                            <option>On Site Job</option>
                            <option>Remote Job</option>
                            <option>Hybrid</option>
                            <option>Part Time</option>
                        </select>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Job Title</span>
                        </label>
                        <input type="text" name="Title" placeholder="" className="input input-bordered border-pink-600 w-full max-w-xs" />
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-8 justify-center items-center" >
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
                <div className=" flex flex-col lg:flex-row gap-8 justify-center items-center" >
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Application Deadline</span>
                        </label>
                        <input type="text" name="deadline" placeholder="" className="input input-bordered border-pink-600 w-full" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Applicants Number</span>
                        </label>
                        <input type="text" name="number" placeholder="" className="input input-bordered border-pink-600 w-full max-w-xs" />
                    </div>

                </div>
                <div className=" mb-6 flex flex-col lg:flex-row justify-center items-center">
            
                        <div className="form-control w-full max-w-2xl">
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