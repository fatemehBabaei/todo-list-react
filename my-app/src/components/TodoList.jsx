import Todo from "./Todo";

const TodoList = ({ todos, onComplete, onDelete }) => {
    const renderTodoList = () => {
        if (todos.length === 0) return <p>add some todos</p>;
        return todos.map((todo) => {
            return (
                <Todo
                    todo={todo}
                    key={todo.id}
                    onComplete={() => onComplete(todo.id)}
                    onDelete={() => onDelete(todo.id)}
                />
            );
        });
    };
    // return <div className="container">Todo List</div>;
    return <div>{renderTodoList()}</div>;
};

export default TodoList;
