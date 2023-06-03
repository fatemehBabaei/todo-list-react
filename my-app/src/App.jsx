import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import TodoApp from "./components/TodoApp";

function App() {
    return (
        <div className=" h-full w-full text-white  ">
            <h1 className="text-center pt-20">Fatemeh todo list</h1>
            <TodoApp />
        </div>
    );
}

export default App;
