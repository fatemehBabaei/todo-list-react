const Todo = ({ todo, onComplete, onDelete }) => {
    return (
        <>
            <div>{todo.text}</div>
            <div>
                <button>Edite</button>
                <button onClick={onComplete}>complete</button>
                <button onClick={onDelete}>Delete</button>
            </div>
        </>
    );
};

export default Todo;
