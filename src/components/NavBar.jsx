import { useNavigate } from "react-router-dom";
import { logoutUser } from "../controllers/UsersController";
import "../styles/NavBar.css";

export default function NavBar() {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <h1 className="navbar-title">e-learning</h1>
      <div className="navbar-buttons">
        <button className="navbar-button" onClick={() => navigate("/courses")}>
          Courses
        </button>
        <button
          className="navbar-button"
          onClick={() => navigate("/instructors")}
        >
          Instructors
        </button>
        <button className="navbar-button" onClick={() => navigate("/jobs")}>
          Jobs
        </button>
        <button onClick={() => {
            logoutUser()
            navigate("/")}}>
          Logout
        </button>
      </div>
    </nav>
  );
}
