import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { saveJob, getJob } from "../controllers/JobsController";
import "../styles/JobsForm.css";

export default function JobForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState({
    id_job_holder: "",
    title: "",
    description: "",
  });

  useEffect(() => {
    if (id) {
      getJob(id, (fetchedCourse) => {
        setJob(fetchedCourse);
      });
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    saveJob(id, job, () => navigate("/jobs"));
  };

  return (
    <form className="job-form" onSubmit={handleSubmit}>
      <h2 className="job-form-title">{id ? "Edit Job" : "Create Job"}</h2>
      <label className="job-form-label">
        Job Holder ID:
        <input
          type="number"
          value={job.id_job_holder ?? ""}
          onChange={(e) => setJob({ ...job, id_job_holder: e.target.value })}
        />
      </label>
      <label className="job-form-label">
        Title:
        <input
          type="text"
          value={job.title}
          onChange={(e) => setJob({ ...job, title: e.target.value })}
          required
        />
      </label>
      <label className="job-form-label">
        Description:
        <input
          type="text"
          value={job.description}
          onChange={(e) => setJob({ ...job, description: e.target.value })}
          required
        />
      </label>
      <button type="submit" className="job-form-button">
        Save
      </button>
    </form>
  );
}
