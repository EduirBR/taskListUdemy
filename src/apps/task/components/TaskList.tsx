import Task from "../TaskInterface";

type Props = {
    tasks: Task[];
    toggleComplete: Function;
    deleteF: Function;
};

function TaskList({ tasks, toggleComplete, deleteF }: Props) {
    return (
        <ul>
            {tasks.length === 0 ? (
                <p>No task to show</p>
            ) : (
                tasks.map((task, index) => (
                    <li
                        key={index}
                        style={{
                            textDecoration: task.completed
                                ? "line-through"
                                : "none",
                        }}
                    >
                        <div>
                            <input
                                type="checkbox"
                                checked={task.completed}
                                onChange={() => toggleComplete(index)}
                            />
                            {task.text}
                        </div>
                        <div>
                            <button
                                disabled={task.completed}
                                onClick={() => deleteF(index)}
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))
            )}
        </ul>
    );
}

export default TaskList;
