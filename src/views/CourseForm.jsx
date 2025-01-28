import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { saveCourse, getCourse } from "../controllers/CoursesController";
import { getInstructors } from "../controllers/UsersController";
import "../styles/CourseForm.css";

export default function CourseForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState({
    id_teacher: "",
    name: "",
    description: "",
    start_date: "",
    end_date: "",
  });
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    getInstructors(setInstructors);

    if (id) {
      getCourse(id, (fetchedCourse) => {
        setCourse(fetchedCourse);
      });
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    saveCourse(id, course, () => navigate("/courses"));
  };

  return (
    <form className="course-form" onSubmit={handleSubmit}>
      <h2 className="course-form-title">
        {id ? "Edit Course" : "Create Course"}
      </h2>
      <label className="course-form-label">
        Instructor:
        <select
          value={course.id_teacher}
          onChange={(e) =>
            setCourse({ ...course, id_teacher: e.target.value || "" })
          }
        >
          <option value="">No Instructor</option>
          {instructors.map((instructor) => (
            <option key={instructor.id} value={instructor.id}>
              {instructor.name + ` (ID: ${instructor.id})`}
            </option>
          ))}
        </select>
      </label>
      <label className="course-form-label">
        Name:
        <input
          type="text"
          value={course.name}
          onChange={(e) => setCourse({ ...course, name: e.target.value })}
          required
        />
      </label>
      <label className="course-form-label">
        Description:
        <input
          type="text"
          value={course.description}
          onChange={(e) =>
            setCourse({ ...course, description: e.target.value })
          }
          required
        />
      </label>
      <label className="course-form-label">
        Start Date:
        <input
          type="date"
          value={course.start_date}
          onChange={(e) => setCourse({ ...course, start_date: e.target.value })}
          required
        />
      </label>
      <label className="course-form-label">
        End Date:
        <input
          type="date"
          value={course.end_date}
          onChange={(e) => setCourse({ ...course, end_date: e.target.value })}
          required
        />
      </label>
      <button type="submit" className="course-form-button">
        Save
      </button>
    </form>
  );
}
