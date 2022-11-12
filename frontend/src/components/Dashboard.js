import { useContext, useEffect } from "react";
import AddTask from "../components/AddTask";
import TaskContainer from "./TasksContainer";
import { AppContext } from "../context/AppState";

const Dashboard = () => {
  const { getTasks, tasksList, addTask, changeStatus, deleteTask, saveTask } =
    useContext(AppContext);

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <>
      <AddTask handleClick={addTask} />
      <TaskContainer
        tasksList={tasksList.filter((task) => !task.completed)}
        pendingStatus={true}
        doneTask={changeStatus}
        saveTask={saveTask}
      />
      <TaskContainer
        tasksList={tasksList.filter((task) => task.completed)}
        undoTask={changeStatus}
        deleteTask={deleteTask}
      />
    </>
  );
};

export default Dashboard;
