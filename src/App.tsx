import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/DashboardLayout";
import { Routes, Route } from "react-router";
import TaskContainer from "./components/taskComponent/TaskContainer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="dashboard" element={<Dashboard />}>
        <Route index element={<TaskContainer />} />
      </Route>
    </Routes>
  );
}

export default App;
