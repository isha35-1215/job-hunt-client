import { Link } from "react-router-dom";

const AllJobsRow = ({ filter }) => {

    const {  name, title, salary, date, deadline } = filter;

    return (

        <tr>

            <td>

                <div className="text-lg  font-semibold">{name}</div>
            </td>
            <td>

                <div className="text-lg  font-semibold">{date}</div>
            </td>
            <td>

                <div className="text-lg  font-semibold">{title}</div>

            </td>
            <td>

            <div className="text-lg  font-semibold">{salary}</div>

            </td>
            <td>
            <div className="text-lg  font-semibold">{deadline}</div>


            </td>
            
            <th>
                <Link to={`/job/${filter._id}`}>
                <button className="btn btn-ghost text-base normal-case text-pink-600 font-extrabold">View Details</button>
                </Link>
            </th>
        </tr>

    );
};

export default AllJobsRow;