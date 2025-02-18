import Task from "./ListTasks";
import { RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { fetchTasks } from "../../redux/dataSlice";
import { useEffect } from "react";

const TaskContainer: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const tasks = useSelector((state: RootState) => state.tasks.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const categorizedTasks = {
    "To-Do": tasks.filter((task) => task.status === "To-Do"),
    "In-Progress": tasks.filter((task) => task.status === "In-Progress"),
    Completed: tasks.filter((task) => task.status === "Completed"),
  };

  return (
    <>
      <Task
        title={"Todo"}
        bgColor={"hsl(320, 100%, 90%)"}
        taskCount={categorizedTasks["To-Do"].length}
        tasks={categorizedTasks["To-Do"]}
      />
      <Task
        title={"In-Progress"}
        bgColor={"hsl(187, 64%, 88%)"}
        taskCount={categorizedTasks["In-Progress"].length}
        tasks={categorizedTasks["In-Progress"]}
      />
      <Task
        title={"Completed"}
        bgColor={"hsl(78, 53%, 90%)"}
        taskCount={categorizedTasks["Completed"].length}
        tasks={categorizedTasks["Completed"]}
      />
    </>
  );
};

export default TaskContainer;
