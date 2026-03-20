import "./App.css";
import { useTodos } from "./hooks/useTodos";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
    const { todos, input, setInput, addToDo, toggleTodo, removeTodo } =
        useTodos();

    return (
        <div className="app-container">
            <h1>My Todo List</h1>
            <p className="todo-counter">
                {todos.length} {todos.length === 1 ? "todo" : "todos"}
            </p>
            <TodoInput input={input} setInput={setInput} addToDo={addToDo} />
            <TodoList
                todos={todos}
                toggleTodo={toggleTodo}
                removeTodo={removeTodo}
            />
        </div>
    );
}

export default App;
