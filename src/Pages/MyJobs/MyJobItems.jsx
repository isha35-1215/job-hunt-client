import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyJobItems = ({ filter, cards, setCards }) => {

    const { _id, name, title, salary, deadline, date, description, image, category, number } = filter;
    console.log(_id);


    const handleDelete = id => {
        console.log('called', `https://jobhunt-server.vercel.app/delete/${_id}`);

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
                fetch(`https://jobhunt-server.vercel.app/delete/${_id}`, {
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

                < button onClick={() => handleDelete(_id)} className="btn btn-ghost text-base normal-case text-pink-600 font-extrabold" > Delete</button >

            </th >

        </tr >

    );
};

export default MyJobItems;