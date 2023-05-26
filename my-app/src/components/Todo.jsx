const Todo = ({ todo, onComplete, onDelete,onEdit }) => {
    return (
        <>
            <div>{todo.text}</div>
            <div>
                <button onClick={onComplete}>complete</button>
                <button onClick={onDelete}>Delete</button>
                <button onClick={onEdit}>Edit </button>
            </div>
        </>
    );
};

export default Todo;
