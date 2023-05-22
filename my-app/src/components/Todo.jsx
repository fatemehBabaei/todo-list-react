const Todo = ({ todo, onComplete }) => {
    return (
        <>
            <div>{todo.text}</div>
            <div>
                <button>Edite</button>
                <button onClick={onComplete}>complete</button>
            </div>
        </>
    );
};

export default Todo;
