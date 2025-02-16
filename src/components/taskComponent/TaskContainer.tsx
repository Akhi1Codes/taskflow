import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import AddTask from "./AddTask";
import { useState } from "react";

const TaskContainer: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <div>
      <div
        className="flex justify-between items-center font-bold bg-purple-200 py-2 px-3 rounded-tl-lg rounded-tr-lg cursor-pointer"
        onClick={() => setToggle(!toggle)}
      >
        <p>Todo(1)</p>
        {toggle ? (
          <ChevronDownIcon className="size-4 stroke-3" />
        ) : (
          <ChevronUpIcon className="size-4 stroke-3" />
        )}
      </div>
      {toggle && <AddTask />}
    </div>
  );
};

export default TaskContainer;
