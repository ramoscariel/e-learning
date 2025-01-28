import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getJobs, deleteJob } from "../controllers/JobsController";
import NavBar from "../components/NavBar";
import "../styles/Jobs.css";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getJobs(setJobs);
  }, []);

  const handleDelete = (id) => {
    deleteJob(id, () => getJobs(setJobs));
  };

  return (
    <div className="jobs-container">
      <NavBar />
      <h2 className="jobs-title">Jobs</h2>
      <button
        className="create-button"
        onClick={() => navigate("/jobs/create")}
      >
        Create New Job
      </button>
      <table className="jobs-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Holder ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <tr key={job.id_job}>
              <td>{job.id_job}</td>
              <td>{job.id_job_holder ? job.id_job_holder : "None"}</td>
              <td>{job.title}</td>
              <td>{job.description}</td>
              <td>
                <button
                  className="action-button edit-button"
                  onClick={() => navigate(`/jobs/edit/${job.id_job}`)}
                >
                  Edit
                </button>
                <button
                  className="action-button delete-button"
                  onClick={() => handleDelete(job.id_job)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
