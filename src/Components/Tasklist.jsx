/* eslint-disable react/prop-types */



const Task = ({ task, onMove }) => {
    const handleMove = (newStatus) => {
        onMove(task.id, newStatus);
    }
    return (
        <div className="task">
            <h3>{task.title}</h3>
            <button onClick={() => handleMove('To-Do')}>Move to To-Do</button>
            <button onClick={() => handleMove('In Progress')}>Move to In Progress</button>
            <button onClick={() => handleMove('Done')}>Move to Done</button>
        </div>
    );
};

export default Task;
