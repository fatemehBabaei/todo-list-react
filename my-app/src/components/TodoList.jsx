import Todo from "./Todo";
import { useState } from "react";
import TodoForm from "./TodoForm";
import imf from "../img/check-list.png";

const TodoList = ({ todos, onComplete, onDelete, onEdit, onUpdateTodo }) => {
    const [edit, setEdit] = useState({
        id: null,
        text: "",
        isCompleted: false,
    });

    const editTodo = (newValue) => {
        onUpdateTodo(edit.id, newValue);
        setEdit({ id: null, text: "" });
        // onUpdateTodo(edit.id);
    };

    const renderTodoList = () => {
        // if (todos.length === 0) return <img className=" max-w-250 mx-auto mt-10" src={imf} />;
        // <p>add some todos</p>;
        return todos.map((todo) => {
            return (
                <div className="">
                    <Todo
                        todo={todo}
                        key={todo.id}
                        onComplete={() => onComplete(todo.id)}
                        onDelete={() => onDelete(todo.id)}
                        onEdit={() => setEdit(todo)}
                    />
                </div>
            );
        });
    };
    return (
        <div>
            {edit.id ? (
                <TodoForm addTodoHandler={editTodo} edit={edit} />
            ) : (
                renderTodoList()
            )}
        </div>
    );
};

export default TodoList;
