import { Outlet } from "react-router";
import Navbar from "../../components/Navbar";
import Filter from "../../components/Filter";
import CategoryBar from "../../components/CategoryBar";

const Dashboard: React.FC = () => {
  return (
    <div className="md:p-4">
      <Navbar />
      <Filter />
      <CategoryBar />
      <Outlet />
    </div>
  );
};

export default Dashboard;
