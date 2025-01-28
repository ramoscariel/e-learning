import { useEffect, useState } from "react";
import { getInstructors } from "../controllers/UsersController";
import NavBar from "../components/NavBar";
import "../styles/Instructors.css";

export default function Instructors() {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    getInstructors(setInstructors);
  }, []);

  return (
    <div className="instructors-container">
      <NavBar />
      <h2 className="instructors-title">Instructors</h2>
      <table className="instructors-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {instructors.map((instructor) => (
            <tr key={instructor.id}>
              <td>{instructor.id}</td>
              <td>{instructor.name}</td>
              <td>{instructor.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
