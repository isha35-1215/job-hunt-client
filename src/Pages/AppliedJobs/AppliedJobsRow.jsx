
const AppliedJobsRow = ({ filter }) => {

    const { applicant, email, resume, name, title, category, salary, date, deadline } = filter;


    return (
        <tr>

            <td>

                <div className="text-base  font-semibold">{applicant}</div>
            </td>
            <td>

                <div className="text-base  font-semibold">{email}</div>
            </td>
            <td>

                <div className="text-base  font-semibold">{resume}</div>
            </td>
            <td>

                <div className="text-base  font-semibold">{title}</div>

            </td>
            <td>

                <div className="text-base  font-semibold">{category}</div>

            </td>
            <td>

                <div className="text-base  font-semibold">{name}</div>
            </td>
            <td>

                <div className="text-base  font-semibold">{date}</div>
            </td>
            <td>

                <div className="text-base  font-semibold">{salary}</div>

            </td>
            <td>
                <div className="text-base  font-semibold">{deadline}</div>


            </td>
           

        </tr>

    );
};

export default AppliedJobsRow;