import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Filter = () => {
  return (
    <div className="flex justify-between">
      <div>
        <label htmlFor="filter">Filter by : </label>
        <select
          name="filter"
          className="text-sm  border-1 border-black rounded-3xl p-1 mx-1"
          defaultValue={"Category"}
        >
          <option disabled>Category</option>
        </select>
        <select
          name="filter"
          className="text-sm  border-1 border-black rounded-3xl p-1 mx-1"
          defaultValue={"Due Date"}
        >
          <option disabled>Due Date</option>
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
        <button className="text-white bg-purple-900 rounded-full py-1 px-4">
          Add Task
        </button>
      </div>
    </div>
  );
};

export default Filter;
