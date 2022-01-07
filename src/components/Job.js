import "./Job.css";
import { useParams } from "react-router-dom";

const Job = () => {
  const { id } = useParams();

  return (
    <div className="Job">
      <h2>Job Page - { id }</h2>
    </div>
  )
}


export default Job;