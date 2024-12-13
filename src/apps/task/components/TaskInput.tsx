type Props = {
    text: string;
    click: Function;
    setText: Function;
};

function TaskInput({ click, setText, text }: Props) {
    return (
        <div>
            <input
                type="text"
                placeholder="Enter a new task"
                onChange={(e) => setText(e.target.value)}
                value={text}
            />
            <button
                onClick={() => {
                    click();
                    console.log("clicked");
                }}
            >
                Add Task
            </button>
        </div>
    );
}

export default TaskInput;
