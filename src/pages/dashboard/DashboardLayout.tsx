import { Outlet } from "react-router";
import Navbar from "../../components/Navbar";

const Dashboard: React.FC = () => {
  return (
    <div className="p-2">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Dashboard;
