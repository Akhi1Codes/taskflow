import React, { useState } from "react";

interface AddTaskProps {
  onClose: () => void;
}

interface TaskData {
  title: string;
  description: string;
  category: string;
  dueDate: string;
  status: string;
}

const AddTask: React.FC<AddTaskProps> = ({ onClose }) => {
  const today = new Date();
  const todayFormatted = today.toISOString().split("T")[0];

  const [taskData, setTaskData] = useState<TaskData>({
    title: "",
    description: "",
    category: "Category",
    dueDate: todayFormatted,
    status: "Status",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setTaskData({ ...taskData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      taskData.title.trim() === "" ||
      taskData.description.trim() === "" ||
      taskData.category === "Category" ||
      taskData.status === "Status"
    ) {
      alert("Please fill in all required fields.");
      return;
    }
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-500/50 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-4 w-full max-w-md">
        <h2 className="text-lg font-semibold mb-4">Add New Task</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="title"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Task Title"
              value={taskData.title}
              onChange={handleChange}
            />
            <textarea
              name="description"
              rows={4}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-2"
              placeholder="Description"
              value={taskData.description}
              onChange={handleChange}
            />
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="w-full sm:w-1/3">
                <p className="text-xs p-0.5">Task Category*</p>
                <select
                  name="category"
                  className="text-sm border rounded w-full py-2 px-3"
                  value={taskData.category}
                  onChange={handleChange}
                >
                  <option disabled>Category</option>
                  <option>Work</option>
                  <option>Personal</option>
                </select>
              </div>
              <div className="w-full sm:w-1/3">
                <p className="text-xs p-0.5">Due Date*</p>
                <input
                  type="date"
                  name="dueDate"
                  min={todayFormatted}
                  className="w-full border rounded py-1 px-2"
                  value={taskData.dueDate}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full sm:w-1/3">
                <p className="text-xs p-0.5">Task Status*</p>
                <select
                  name="status"
                  className="text-sm border rounded w-full py-2 px-3"
                  value={taskData.status}
                  onChange={handleChange}
                >
                  <option disabled>Status</option>
                  <option>To-Do</option>
                  <option>In-Progress</option>
                  <option>Completed</option>
                </select>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
