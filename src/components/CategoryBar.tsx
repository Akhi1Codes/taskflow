const CategoryBar: React.FC = () => {
  return (
    <div className="grid grid-cols-10 grid-rows-1 border-t-2 border-black/10 text-sm p-2 font-semibold text-black/60">
      <p className="col-span-3">Task Name</p>
      <p className="col-span-2">Due Date</p>
      <p className="col-span-2">Task Status</p>
      <p className="col-span-3">Task Category</p>
    </div>
  );
};

export default CategoryBar;
