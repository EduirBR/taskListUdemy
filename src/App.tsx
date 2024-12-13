import { useState } from "react";
import "./App.css";
import TaskInput from "./apps/task/components/TaskInput";
import Task, { createTask } from "./apps/task/TaskInterface";
import TaskList from "./apps/task/components/TaskList";
import SizedBox from "./apps/task/components/SizedBox";

function App() {
    const [taskList, setTask] = useState<Task[]>([]);
    const [newTask, setNewTask] = useState<string>("");

    const addTask = (): void => {
        const newtT = createTask(newTask);

        console.log(newtT);
        if (newtT) {
            setTask([...taskList, newtT]);
            setNewTask("");
        }
    };

    const handleCompleted = (index: number) => {
        const updatedTask = taskList.map((task, i) => {
            return i === index ? { ...task, completed: !task.completed } : task;
        });
        setTask(updatedTask);
    };

    const deleteTask = (index: number) => {
        const updatedTask = taskList.filter((_, i) => {
            return i !== index;
        });
        setTask(updatedTask);
    };

    return (
        <div className="App">
            <h1>Task Manager</h1>
            <TaskInput click={addTask} setText={setNewTask} text={newTask} />
            <SizedBox height={20} />
            <TaskList
                tasks={taskList}
                toggleComplete={handleCompleted}
                deleteF={deleteTask}
            />
        </div>
    );
}

export default App;
