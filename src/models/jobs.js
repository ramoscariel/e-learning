import axios from "axios";
import endpoint from "../config/backUrl";

const jobsEndpoint = `${endpoint}/jobs`;

export const getAllJobs = async () => {
  try {
    const resp = await axios.get(`${jobsEndpoint}/`);
    return resp.data;
  } catch {
    return null;
  }
};

export const getJob = async (id) => {
  try {
    const resp = await axios.get(`${jobsEndpoint}/${id}`);
    return resp.data;
  } catch {
    return null;
  }
};

export const createJob = async (data) => {
  //const token = localStorage.getItem("token");
  const response = await axios.post(`${jobsEndpoint}/`, {
    id_job_holder: data.id_job_holder,
    title: data.title,
    description: data.description,
  });
  console.log(response);
};

export const updateJob = async (id, data) => {
  const token = localStorage.getItem("token");
  const response = await axios.put(
    `${jobsEndpoint}/${id}`,
    {
      id_job_holder: data.id_job_holder,
      title: data.title,
      description: data.description,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  console.log(response);
};

export const deleteJob = async (id) => {
  const token = localStorage.getItem("token");
  await axios.delete(`${jobsEndpoint}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
