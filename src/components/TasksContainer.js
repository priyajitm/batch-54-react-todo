import { useState } from "react";

const TaskContainer = ({
  tasksList,
  pendingStatus,
  doneTask,
  undoTask,
  deleteTask,
  saveTask,
}) => {
  const title = pendingStatus ? "Pending Tasks" : "Completed Tasks";

  const [taskName, setTaskName] = useState(null);
  const [showEdit, setShowEdit] = useState(false);
  const [taskID, setTaskID] = useState(null);

  const handleEdit = (value, id) => {
    setTaskName(value);
    setShowEdit(true);
    setTaskID(id);
  };

  const handleUndo = () => setShowEdit(false);

  const handleSave = () => {
    saveTask(taskName, taskID);
    setShowEdit(false);
  };

  return (
    <div className="tasks-wrapper">
      <p className="task-header">{title}</p>

      {tasksList.map((task) => {
        if (showEdit && task.id == taskID) {
          return (
            <div className="task">
              <input
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
              />
              <i className="fa-solid fa-floppy-disk" onClick={handleSave}></i>
              <i className="fa-solid fa-rotate-right" onClick={handleUndo}></i>
            </div>
          );
        } else {
          return (
            <div className="task" key={task.id}>
              <p className={task.completed ? "strike-through" : undefined}>
                {task.title}
              </p>
              {!task.completed ? (
                <>
                  <i
                    className="fa-regular fa-circle-check"
                    onClick={() => doneTask(task.id)}
                  ></i>
                  <i
                    className="fa-solid fa-pen-to-square"
                    onClick={() => handleEdit(task.title, task.id)}
                  ></i>
                </>
              ) : (
                <>
                  <i
                    className="fa-solid fa-rotate-right"
                    onClick={() => undoTask(task.id)}
                  ></i>
                  <i
                    className="fa-solid fa-trash"
                    onClick={() => deleteTask(task.id)}
                  ></i>
                </>
              )}
            </div>
          );
        }
      })}
    </div>
  );
};

export default TaskContainer;
