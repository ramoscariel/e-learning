import axios from "axios";
import endpoint from "../config/backUrl";

const coursesEndpoint = `${endpoint}/courses`;

export const getAllCourses = async () => {
  try {
    const resp = await axios.get(`${coursesEndpoint}/`);
    return resp.data;
  } catch {
    return null;
  }
};

export const getCourse = async (id) => {
  try {
    const resp = await axios.get(`${coursesEndpoint}/${id}`);
    return resp.data;
  } catch {
    return null;
  }
};

export const createCourse = async (data) => {
  //const token = localStorage.getItem("token");
  const response = await axios.post(`${coursesEndpoint}/`, {
    id_teacher: data.id_teacher,
    name: data.name,
    description: data.description,
    start_date: data.start_date,
    end_date: data.end_date,
  });
  console.log(response);
};

export const updateCourse = async (id, data) => {
  const token = localStorage.getItem("token");
  const response = await axios.put(
    `${coursesEndpoint}/${id}`,
    {
      id_teacher: data.id_teacher,
      name: data.name,
      description: data.description,
      start_date: data.start_date,
      end_date: data.end_date,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  console.log(response);
};

export const deleteCourse = async (id) => {
  const token = localStorage.getItem("token");
  await axios.delete(`${coursesEndpoint}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
