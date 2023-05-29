import { BiTrash, BiEditAlt, BiCheckDouble } from "react-icons/bi";

const Todo = ({ todo, onComplete, onDelete, onEdit }) => {
    return (
        <div className="flex justify-between items-center mt-10">
            <div>{todo.text}</div>
            <div>
                <button
                    className="btn btn-active btn-accent"
                    onClick={onComplete}
                >
                    <BiCheckDouble />
                </button>
                <button
                    className="btn btn-outline btn-error"
                    onClick={onDelete}
                >
                    <BiTrash />
                </button>
                <button className="btn" onClick={onEdit}>
                    <BiEditAlt />
                </button>
            </div>
        </div>
    );
};

export default Todo;
