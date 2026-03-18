import React from "react";
import TodoItem from "./TodoItem";
function TodoList({ todos, toggleTodo, removeTodo }) {
    if (todos.length === 0) return null;
    return (
        <div className="todo-list">
            <ul>
                {todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        toggleTodo={toggleTodo}
                        removeTodo={removeTodo}
                    />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
