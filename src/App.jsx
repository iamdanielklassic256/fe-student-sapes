import Layout from "./components/layout/Layout";
import { Route, Routes, Navigate } from "react-router-dom";
import {
  AcademicYear,
  Courses,
  Dashboard,
  EvaluationPage,
  Faculties,
  Login,
  Missing,
  LecturerPage,
  Profile,
  Report,
  Results,
  Setting,
  StudentPage,
  StudentAttendance,
  ViewAttendance,
  CourseResults,
} from "./scenes";
import Unauthorized from "./scenes/unauthorized";
import RequireAuth from "./auth/RequireAuth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SIngleResults from "./scenes/dashboard/SIngleResults";

function App() {

  const ROLES = {
    Student: 2007,
    Lecturer: 2008,
    Admin: 2009,
  };
  return (
    <>
      <ToastContainer
        theme="colored"
        position="top-right"
        className="toast-container absolute top-0 right-44 mt-10"
      ></ToastContainer>
      <Routes>
        {/* public routes */}
        <Route path="login" element={<Login />} />
        <Route path="unauthorized" element={<Unauthorized />} />
        {/* private routes only */}
        <Route path="/" element={<Layout />}>
          <Route
            path="/"
            element={<RequireAuth allowedRoles={[ROLES.Student]} />}
          >
            <Route path="/" element={<Dashboard />} />
            <Route path="/results/:id" element={<SIngleResults />} />
            <Route path="courses" element={<Courses />} />
            <Route path="courses/:id" element={<CourseResults />} />
            <Route path="evaluation" element={<EvaluationPage />} />
            <Route path="student-attendance" element={<StudentAttendance />} />
            <Route path="/view" element={<ViewAttendance />} />
            <Route path="results" element={<Results />} />
            <Route path="Faculties" element={<Faculties />} />
            <Route path="reports" element={<Report />} />
            <Route path="students" element={<StudentPage />} />
            <Route path="lecturers" element={<LecturerPage />} />
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Setting />} />
          </Route>
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
