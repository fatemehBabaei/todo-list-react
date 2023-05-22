import logo from "./logo.svg";
import "./App.css";
import TodoApp from "./components/TodoApp";

function App() {
    return (
        <div className="container">
            <h1>Fatemeh todo list</h1>
            <TodoApp />
        </div>
    );
}

export default App;
