const Todo = ({ todo }) => {
    return (
        <>
            <div>{todo.text}</div>
            <div>
                <button>Edite</button>
                <button>complete</button>
            </div>
        </>
    );
};

export default Todo;
