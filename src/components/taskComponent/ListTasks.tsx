import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { TaskData } from "../AddTask";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { updateTask } from "../../redux/dataSlice";

interface TaskProps {
  tasks: TaskData[];
  title: string;
  bgColor: string;
  taskCount: number;
}

const Task: React.FC<TaskProps> = ({ title, bgColor, taskCount, tasks }) => {
  const [toggle, setToggle] = useState<boolean>(true);
  const [taskStatusToggle, setTaskStatusToggle] = useState<
    Record<string, boolean>
  >({});
  const dispatch = useDispatch<AppDispatch>();

  const handleTaskStatusToggle = (taskId: string | undefined) => {
    if (taskId) {
      setTaskStatusToggle((prev) => ({
        ...prev,
        [taskId]: !prev[taskId],
      }));
    }
  };

  const handleStatusChange = (
    taskId: string | undefined,
    newStatus: "To-Do" | "In-Progress" | "Completed"
  ) => {
    if (taskId) {
      const updatedTask = tasks.find((task) => task.id === taskId);
      if (updatedTask) {
        const updatedTaskData = { ...updatedTask, status: newStatus };
        dispatch(updateTask(updatedTaskData));
        setTaskStatusToggle((prev) => ({
          ...prev,
          [taskId]: false,
        }));
      }
    }
  };

  return (
    <div className="mb-8">
      <div
        className={`flex justify-between items-center font-bold py-2 px-3 ${
          !toggle ? "rounded-lg" : "rounded-tl-lg rounded-tr-lg"
        } cursor-pointer`}
        style={{ backgroundColor: bgColor }}
        onClick={() => setToggle(!toggle)}
      >
        <p className="select-none">
          {title} ({taskCount})
        </p>
        {toggle ? (
          <ChevronDownIcon className="size-4 stroke-3" />
        ) : (
          <ChevronUpIcon className="size-4 stroke-3" />
        )}
      </div>
      {toggle && (
        <div className="bg-gray-100 rounded-b-lg">
          {tasks.length > 0 ? (
            <ul>
              {tasks.map((task) => (
                <li key={task.id} className="py-1">
                  <div className="grid grid-cols-10 grid-rows-1 border-b-2 border-black/5 p-1 font-semibold items-center">
                    <div className="col-span-3 flex items-center gap-1.5">
                      <CheckCircleIcon className="size-5 text-gray-400" />
                      <p>{task.title}</p>
                    </div>
                    <p className="col-span-2">{task.dueDate}</p>
                    <div className="relative col-span-2">
                      <p
                        className="bg-gray-300 w-fit px-2 py-1 rounded cursor-pointer"
                        onClick={() => handleTaskStatusToggle(task.id)}
                      >
                        {task.status}
                      </p>
                      {taskStatusToggle[task.id as string] && (
                        <div className="absolute bg-white shadow-lg p-2 rounded z-10">
                          <p
                            className="cursor-pointer"
                            onClick={() => handleStatusChange(task.id, "To-Do")}
                          >
                            To-Do
                          </p>
                          <p
                            className="cursor-pointer"
                            onClick={() =>
                              handleStatusChange(task.id, "In-Progress")
                            }
                          >
                            In-Progress
                          </p>
                          <p
                            className="cursor-pointer"
                            onClick={() =>
                              handleStatusChange(task.id, "Completed")
                            }
                          >
                            Completed
                          </p>
                        </div>
                      )}
                    </div>
                    <p className="col-span-3">{task.category}</p>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="flex justify-center items-center h-40">
              <p className="text-sm select-none">No Task in {title}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Task;
