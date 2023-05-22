import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { useState } from "react";
const TodoApp = () => {
    const [todos, setTodos] = useState([]);

    const addTodoHandler = (input) => {
        console.log(input);
        const newTodo = {
            id: Math.floor(Math.random() * 1000),
            text: input,
            isComplete: false,
        };
        setTodos([...todos, newTodo]);
    };

    const completeTodo = (id) => {
        console.log(id);
        const index = todos.findIndex((todo) => todo.id === id);
        console.log(index);
        //clone :Do Not Mutate
        const selectedTodo = { ...todos[index] };
        console.log(selectedTodo);
        console.log(selectedTodo.isComplete);
        selectedTodo.isComplete = !selectedTodo.isComplete;
        //clone todos
        const updatedTodos = [...todos];
        updatedTodos[index] = selectedTodo;
        setTodos(updatedTodos);
    };

    return (
        <div className="container">
            <TodoForm addTodoHandler={addTodoHandler} />
            <TodoList todos={todos} onComplete={completeTodo} />
        </div>
    );
};

export default TodoApp;
