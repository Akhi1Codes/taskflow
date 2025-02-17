import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import AddTask from "./AddTask";
import { useState } from "react";

interface TaskProps {
  title: string;
  bgColor: string;
  taskCount: number;
  showAddTask?: boolean;
  children?: React.ReactNode;
}

const Task: React.FC<TaskProps> = ({
  title,
  bgColor,
  taskCount,
  showAddTask = true,
  children,
}) => {
  const [toggle, setToggle] = useState<boolean>(true);

  return (
    <div className="mb-8">
      <div
        className={`flex justify-between items-center font-bold py-2 px-3  ${
          !toggle ? "rounded-lg" : "rounded-tl-lg rounded-tr-lg"
        } cursor-pointer`}
        style={{ backgroundColor: bgColor }}
        onClick={() => setToggle(!toggle)}
      >
        <p className="select-none">
          {title}({taskCount})
        </p>
        {toggle ? (
          <ChevronDownIcon className="size-4 stroke-3" />
        ) : (
          <ChevronUpIcon className="size-4 stroke-3" />
        )}
      </div>
      {toggle && (
        <div className="bg-gray-100 rounded-b-lg">
          {showAddTask ? <AddTask /> : children}
          <div className="flex justify-center items-center h-40">
            <p className="text-sm select-none">No Task in {title}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Task;
