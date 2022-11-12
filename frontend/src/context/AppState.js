import { createContext, useReducer } from "react";
import axios from "axios";
import AppReducer from "./AppReducer";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  tasks: [],
};

export const AppContext = createContext(initialState);

export const AppProvider = ({ children }) => {
  // Reducer Method
  const [state, dispatch] = useReducer(AppReducer, initialState);

  /*
    ----------------------------------
    Actions
    ----------------------------------
    */

  // Get All The tasks from API
  const getTasks = async () => {
    const response = await axios.get("/gettasks");
    dispatch({
      type: "TASKS_DATA",
      payload: response.data.tasks,
    });
  };

  // Adding A Task
  const addTask = async (task) => {
    const id = uuidv4();

    const taskData = {
      taskid: id,
      title: task,
      completed: false,
    };
    const response = await axios.post("/addtask", taskData);
    if (response.status === 201) {
      dispatch({
        type: "NEW_TASK",
        payload: taskData,
      });
    }
  };

  // Changing Status from Completed(false) to Completed(true)
  const changeStatus = async (id, completed) => {
    console.log(id, completed);
    const response = await axios.post("/updatetask", { id, completed });

    if (response.status === 200) {
      const data = state.tasks.map((task) => {
        if (task.taskid === id) {
          return { ...task, completed };
        }
        return task;
      });
      dispatch({
        type: "UPDATE_TASKLIST",
        payload: data,
      });
    }
  };

   // Deleting A Task
   const deleteTask = async (id) => {
    const response = await axios.post(`/deletetask/${id}`);
    if (response.status === 200) {
      const data = state.tasks.filter((task) => task.taskid !== id);
      dispatch({
        type: "UPDATE_TASKLIST",
        payload: data,
      });
    }
  };

   // Updating Task Title
   const saveTask = async (val, id) => {
    const response = await axios.post("/updatetask", { id, title: val });

    if (response.status === 200) {
      const data = state.tasks.map((task) => {
        if (task.taskid === id) {
          return { ...task, title: val };
        }
        return task;
      });
      dispatch({
        type: "UPDATE_TASKLIST",
        payload: data,
      });
    }
  };

  // Login User
  const loginUser = async (userName, password) => {
        const res = await axios.post('/login', {username: userName, password})
        console.log(res)
    }

  

  return (
    <AppContext.Provider
      value={{
        tasksList: state.tasks,
        getTasks,
        addTask,
        changeStatus,
        deleteTask,
        saveTask,
        loginUser
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
