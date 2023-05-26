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
                    type="text"
                    value={input}
                    onChange={changeHandler}
                    placeholder={props.edit ? "update to do ...." : "add to do"}
                />
                <button type="submit">{props.edit ? "update" : "add"}</button>
            </form>
        </div>
    );
};

export default TodoForm;
