import { useEffect, useRef, useState } from "react";

const TodoForm = (props) => {
    const [input, setInput] = useState("");
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
                {!props.edit ? (
                    <>
                        <input
                            type="text"
                            value={input}
                            onChange={changeHandler}
                            placeholder="add to do ...."
                        />
                        <button type="submit">add</button>
                    </>
                ) : (
                    <>
                        <input
                            type="text"
                            value={input}
                            onChange={changeHandler}
                            placeholder="update to do ....."
                            ref={inputRef}
                        />
                        <button type="submit">update</button>
                    </>
                )}
            </form>
        </div>
    );
};

export default TodoForm;
