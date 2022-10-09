const TaskContainer = ({tasksList}) => {
  return (
    <div className="tasks-wrapper">
      {tasksList.map((task) => (
        <div className="task" key={task.id}>
          <p>{task.taskName}</p>
          <i className="fa-regular fa-circle-check"></i>
          <i className="fa-solid fa-pen-to-square"></i>
        </div>
      ))}
    </div>
  );
};

export default TaskContainer;
