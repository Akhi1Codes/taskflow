import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import AddTask from "./AddTask";

const Filter: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex justify-between mb-6">
      <div>
        <label htmlFor="filter" className="text-sm text-black/80">
          Filter by :
        </label>
        <select
          name="filter"
          className="text-sm  border-1 border-black/20 rounded-3xl p-1 mx-1"
          defaultValue={"Category"}
        >
          <option disabled>Category</option>
        </select>
      </div>
      <div className="flex gap-1.5">
        <div className="relative">
          <input
            type="text"
            className="border-1 border-black rounded-3xl text-xs p-2 pl-8 w-full"
            placeholder="Search"
          />
          <div className="absolute inset-y-0 left-2 flex items-center pointer-events-none">
            <MagnifyingGlassIcon className="h-5 w-5 absolute" />
          </div>
        </div>
        <button
          className="text-white bg-purple-900 rounded-full py-1 px-4"
          onClick={() => setIsModalOpen(true)}
        >
          Add Task
        </button>
        {isModalOpen && <AddTask onClose={() => setIsModalOpen(false)} />}
      </div>
    </div>
  );
};

export default Filter;
