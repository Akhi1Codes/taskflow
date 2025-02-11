import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/DashboardLayout";
import { Routes, Route } from "react-router";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />}></Route>
    </Routes>
  );
}

export default App;
