import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./views/Login";
import Courses from "./views/Courses";
import CourseForm from "./views/CourseForm";
import Jobs from "./views/Jobs";
import JobForm from "./views/JobsForm";
import Instructors from "./views/Instructors";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/create" element={<CourseForm/>}/>
        <Route path="/courses/edit/:id" element={<CourseForm />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/jobs/create" element={<JobForm/>}/>
        <Route path="/jobs/edit/:id" element={<JobForm />} />
        <Route path="/instructors" element={<Instructors />} />
      </Routes>
    </Router>
  );
}
