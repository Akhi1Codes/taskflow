import { PlusIcon } from "@heroicons/react/24/outline";

const AddTask: React.FC = () => {
  return (
    <div className="flex items-center font-semibold text-sm py-2 px-8 gap-1.5 border-b-2 border-black/5">
      <PlusIcon className="size-3 stroke-3 text-purple-800" />
      <p className="cursor-pointer">ADD TASK</p>
    </div>
  );
};

export default AddTask;
