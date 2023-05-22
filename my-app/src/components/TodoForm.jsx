import { useState } from "react";

const TodoForm = (props) => {
    const [input, setInput] = useState("");
    const changeHandler = (e) => {
        setInput(e.target.value);
    };
    const submitHandler = (e) => {
        e.preventDefault();
        if (!input) {
            alert("insert your task");
            return;
        }
        props.addTodoHandler(input);
        setInput("");
    };
    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <input type="text" value={input} onChange={changeHandler} />
                <button type="submit">add</button>
            </form>
        </div>
    );
};

export default TodoForm;
