import { FaRegHeart } from "react-icons/fa";

const Job = (props) => {
    return (
        <div className="job" id={props.className}>
            <h2 className={props.className}>{props.jobTitle}</h2>
            <div className="save">
                <FaRegHeart />
            </div>
            <div className="company_info">
                <span className="publication_date">posted on {props.date}</span>
                <span className="company_name">by {props.company}</span>
            </div>
            <span className="job_info">{props.contractType} - {props.country} - {props.city}</span>
        </div>
    );
};

export default Job;