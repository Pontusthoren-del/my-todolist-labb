import React from "react";

function TodoInput({ input, setInput, addToDo }) {
    return (
        <div className="input-container">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addToDo()}
                placeholder="Add a new todo..."
            />
            <button onClick={addToDo}>Add</button>
        </div>
    );
}

export default TodoInput;
