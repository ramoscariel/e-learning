import * as Jobs from "../models/jobs";

export const getJobs = (setJobs) => {
  Jobs.getAllJobs().then((resp) => {
    const jobsArray = resp.jobs;
    const jobs = [];
    jobsArray.forEach((job) => {
      jobs.push({
        id_job: job[0],
        id_job_holder: job[1],
        title: job[2],
        description: job[3],
      });
    });
    setJobs(jobs);
  });
};

export const getJob = (id, setJob) => {
  Jobs.getJob(id).then((resp) => {
    const jobArray = resp.job;
    const [id_job, id_job_holder, title, description] = jobArray;
    const job = {
      id_job: id_job,
      id_job_holder: id_job_holder,
      title: title,
      description: description,
    };
    setJob(job);
  });
};

export const saveJob = (id, job, onSuccess) => {
  console.log(job.id_job_holder,typeof(job.id_job_holder))
  if (job.id_job_holder === "") {
    job.id_job_holder = null;
  }
  try {
    if (id) {
      Jobs.updateJob(id, job).then(() => onSuccess());
    } else {
      Jobs.createJob(job).then(() => onSuccess());
    }
  } catch (error) {
    console.error("Error saving job:", error);
  }
};

export const deleteJob = (id, onSuccess) => {
  try {
    Jobs.deleteJob(id).then(() => onSuccess());
  } catch (error) {
    console.error("Error deleting job:", error);
  }
};
