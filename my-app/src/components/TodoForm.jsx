import { useEffect, useRef, useState } from "react";

const TodoForm = (props) => {
    const [input, setInput] = useState(props.edit ? props.edit.text : "");
    // const inputRef = useRef(null);
    // useEffect(() => {
    //     inputRef.current.focus();
    // }, []);
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
                <input
                    className="input input-bordered input-info p-4 w-full max-w-xs rounded-r text-primary"
                    type="text"
                    value={input}
                    onChange={changeHandler}
                    placeholder={props.edit ? "update to do ...." : "add to do"}
                />
                <button type="submit" className="btn input-bordered btn-primary rounded-l p-4">{props.edit ? "update" : "add"}</button>
            </form>
        </div>
    );
};

export default TodoForm;
