import { Outlet } from "react-router";
import Navbar from "../../components/Navbar";
import Filter from "../../components/Filter";

const Dashboard: React.FC = () => {
  return (
    <div className="md:p-4">
      <Navbar />
      <Filter />
      <Outlet />
    </div>
  );
};

export default Dashboard;
