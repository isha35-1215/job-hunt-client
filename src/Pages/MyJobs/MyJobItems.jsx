import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyJobItems = ({ filter, cards, setCards }) => {

    const { _id, name, title, salary, deadline, date, description, image, category, number } = filter;
    console.log(_id);

    // const [isOpen, setIsOpen] = useState(false);


    // const handleUpdate = (event) => {
    //     event.preventDefault();
    //     const form = event.target;
    //     const image = form.image.value;
    //     const deadline = form.deadline.value;
    //     const date = form.date.value;
    //     const salary = form.salary.value;
    //     const description = form.description.value;
    //     const number = form.number.value;
    //     const category = form.category.value;

    //     const applied = { title, image, deadline, date, salary, description, number, category };
    //     console.log(applied);

    //     console.log(applied);

    //     fetch(`http://localhost:5000/jobDetails/${_id}`, {
    //         method: 'PUT',
    //         headers: {
    //             'content-type': 'application/json',
    //         },
    //         body: JSON.stringify(applied),
    //     })
    //         .then((res) => res.json())
    //         .then((data) => {
    //             if (data.modifiedCount > 0) {
    //                 swal("Success", "Your Data Updated successfully!", "success");
    //                 document.getElementById('my_modal_2').close();
    //             }

    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });


    // }








    const handleDelete = id => {
        console.log('called', `http://localhost:5000/delete/${_id}`);

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/delete/${_id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            );
                            const remaining = cards.filter(card => card._id != id);
                            console.log(remaining);
                            console.log(id);
                            setCards(remaining);
                        }
                    })
                // .catch(error => {
                //     console.error('Error deleting product:', error);
                //     Swal.fire(
                //         'Error!',
                //         'An error occurred while deleting the product.',
                //         'error'
                //     );
                // });
            }
        })
    }

    return (
        <tr>

            <td>

                <div className="text-lg  font-semibold">{name}</div>
                <div className="text-lg  font-semibold">{date}</div>

            </td>

            <td>
                <div className="text-lg  font-semibold">{title}</div>
            </td>
            <td>
                <div className="text-lg  font-semibold">{category}</div>
            </td>
            <td>
                <div className="text-lg  font-semibold">{image}</div>
            </td>
            <td>
                <div className="text-lg  font-semibold">{salary}</div>
            </td>

            <td>
                <div className="text-lg  font-semibold">{deadline}</div>
            </td>
            <td>
                <div className="text-lg  font-semibold">{description}</div>
            </td>
            <td>
                <div className="text-lg  font-semibold">{number}</div>
            </td>
            <th>
                <Link to={`/updateMyJobs/${_id}`}>
                    
                    <button className="btn btn-ghost text-base normal-case text-pink-600 font-extrabold">Update</button>

                </Link>
                {/* <dialog id="my_modal_2" className="modal">
                    <div className="modal-box">
                        <form onSubmit={handleUpdate}>

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
                {/* <select name="category" defaultValue={category} className="select select-bordered border-fuchsia-600 w-full max-w-xs">
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
                <input type="text" name="title" defaultValue={title} placeholder="" className="input input-bordered border-pink-600 w-full max-w-xs" />
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Banner Image</span>
                </label>
                <input type="text" name="image" defaultValue={image} placeholder="" className="input input-bordered border-pink-600 w-full max-w-xs" />
            </div>
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

            <div className="modal-action">
                <button type="submit" className="btn btn-secondary bg-pink-700 text-base normal-case text-white px-4">Submit</button>
                <button className="btn btn-secondary bg-pink-700 text-base normal-case text-white px-4" onClick={() => {
                    document.getElementById('my_modal_2').close();
                }}>Close</button>
            </div>
        </form>
                    </div >
                </dialog > * /} */}
    < button onClick = {() => handleDelete(_id)} className = "btn btn-ghost text-base normal-case text-pink-600 font-extrabold" > Delete</button >

            </th >

        </tr >

    );
};

export default MyJobItems;