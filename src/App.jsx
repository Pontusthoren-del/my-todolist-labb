//Useeffect och useState är React hooks som används för att hantera state och side effects i funktionella komponenter.
// I det här fallet används useState för att hantera listan av todos och input-värdet,
// medan useEffect används för att spara todos i localStorage varje gång de ändras.
import { useEffect, useState } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
function App() {
    // Här initieras state för todos och input. Todos hämtas från localStorage om det finns något sparat, annars startar det som en tom array.
    const [todos, setTodos] = useState(() => {
        const stored = localStorage.getItem("todos");
        return stored ? JSON.parse(stored) : [];
    });
    const [input, setInput] = useState("");
    // addToDo-funktionen lägger till en ny todo i listan om input inte är tom.
    // Den skapar ett nytt todo-objekt med ett unikt id, texten från input och en completed-status som är false.
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
    return (
        // App-komponenten renderar en container med en rubrik, TodoInput-komponenten för att lägga till nya todos, och TodoList-komponenten som visar listan av todos.
        <div className="app-container">
            <h1>My Todo List</h1>
            <p className="todo-counter">{todos.length} {todos.length === 1 ? "todo" : "todos"}</p>
            <TodoInput input={input} setInput={setInput} addToDo={addToDo} />
            <TodoList
                todos={todos}
                setTodos={setTodos}
                toggleTodo={toggleTodo}
                removeTodo={removeTodo}
            />
        </div>
    );
}

export default App;
