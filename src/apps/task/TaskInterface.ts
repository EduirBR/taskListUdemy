interface Task {
    text: string;
    completed: boolean;
}
function createTask(
    text: string,
    completed: boolean = false
): Task | undefined {
    if (text.trim() === "") return;
    return {
        text,
        completed,
    };
}

export default Task;
export { createTask };
