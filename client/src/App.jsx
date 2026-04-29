import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/LoginLanding";
import Layout from "./pages/Layout";
import Dashboard from "./pages/Dashboard";
import Leave from "./pages/Leave";
import Attendance from "./pages/Attendance";
import Setting from "./pages/Setting";
import PrintPayslip from "./pages/PrintPayslip";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/employee" element={<Dashboard />} />
          <Route path="/payslips" element={<Dashboard />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/leave" element={<Leave />} />
        </Route>
        <Route path="/print/payslips/:id" element={<PrintPayslip />} />
        <Route path="*" element={<Navigate to={"/dashboard"} replace />} />
      </Routes>
    </>
  );
}

export default App;
