import React from "react";
// TodoItem-komponenten representerar en enskild todo i listan. 
// Den tar emot ett todo-objekt och två funktioner, toggleTodo och removeTodo, som används för att markera en todo som klar eller ta bort den från listan.
function TodoItem({ todo, toggleTodo, removeTodo }) {
    return (
        <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
            <span>{todo.text}</span>
            <div>
                <button
                    className={
                        todo.completed ? "undo-button" : "complete-button"
                    }
                    onClick={() => toggleTodo(todo.id)}
                >
                    {todo.completed ? "Undo" : "Complete"}
                </button>
                <button
                    className="remove-button"
                    onClick={() => removeTodo(todo.id)}
                >
                    Remove
                </button>
            </div>
        </li>
    );
}

export default TodoItem;
