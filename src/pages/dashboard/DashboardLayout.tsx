import { Outlet } from "react-router";
import Navbar from "../../components/Navbar";

const Dashboard: React.FC = () => {
  return (
    <div className="md:p-4">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Dashboard;
