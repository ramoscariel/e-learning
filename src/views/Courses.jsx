import { useEffect, useState } from "react"; 
import { useNavigate } from "react-router-dom";
import { getCourses, deleteCourse } from "../controllers/CoursesController"; 
import NavBar from "../components/NavBar";
import "../styles/Courses.css";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getCourses(setCourses);
  }, []);

  const handleDelete = (id) => {
    deleteCourse(id, () => getCourses(setCourses));
  };

  return (
    <div className="courses-container">
      <NavBar />
      <h2 className="courses-title">Courses</h2>
      <button 
        className="create-button" 
        onClick={() => navigate("/courses/create")}
      >
        Create New Course
      </button>
      <table className="courses-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Teacher ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id_course}>
              <td>{course.id_course}</td>
              <td>{course.id_teacher ? course.id_teacher : 'None'}</td>
              <td>{course.name}</td>
              <td>{course.description}</td>
              <td>{course.start_date}</td>
              <td>{course.end_date}</td>
              <td>
                <button 
                  className="action-button edit-button" 
                  onClick={() => navigate(`/courses/edit/${course.id_course}`)}
                >
                  Edit
                </button>
                <button 
                  className="action-button delete-button" 
                  onClick={() => handleDelete(course.id_course)}
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
