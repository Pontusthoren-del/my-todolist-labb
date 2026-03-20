import { useEffect, useState } from "react";

export function useTodos() {

    const [todos, setTodos] = useState(() => {
        const stored = localStorage.getItem("todos");
        return stored ? JSON.parse(stored) : [];
    });
    const [input, setInput] = useState("");

    const addToDo = () => {
        if (input.trim() !== "") {
            setTodos([
                { id: Date.now(), text: input, completed: false },
                ...todos,
            ]);
            setInput("");
        }
    };

    const toggleTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo,
            ),
        );
    };

    const removeTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    return { todos, input, setInput, addToDo, toggleTodo, removeTodo };
}
