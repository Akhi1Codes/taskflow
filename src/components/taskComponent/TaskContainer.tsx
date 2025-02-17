import Task from "./Task";
const TaskContainer: React.FC = () => {
  return (
    <>
      <Task title={"Todo"} bgColor={"hsl(320, 100%, 90%)"} taskCount={2} />
      <Task
        title={"In-Progress"}
        bgColor={"hsl(187, 64%, 88%)"}
        taskCount={0}
        showAddTask={false}
      />
      <Task
        title={"Completed"}
        bgColor={"hsl(78, 53%, 90%)"}
        taskCount={0}
        showAddTask={false}
      />
    </>
  );
};

export default TaskContainer;
