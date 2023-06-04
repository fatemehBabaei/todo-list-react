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
        <form className="form max-w-[600] flex gap-3  " onSubmit={submitHandler}>
            <input
                className="w-full  outline-none sm:pl-2  lg:pl-4 "
                type="text"
                value={input}
                onChange={changeHandler}
                placeholder={props.edit ? "update to do ...." : "add to do"}
            />
            <button
                type="submit"
                className="  btn-submit"
            >
                {props.edit ? "update" : "+"}
            </button>
        </form>
    );
};

export default TodoForm;
