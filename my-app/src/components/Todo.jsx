import { BiTrash, BiEditAlt, BiCheckDouble } from "react-icons/bi";

const Todo = ({ todo, onComplete, onDelete, onEdit }) => {
    return (
        <div className=" flex-col md:flex-row flex justify-between items-center mt-2 card-item ">
            <div className="mb-2 text-center sm:mb-0 sm:text-left ">{todo.text}</div>
            <div>
                <button
                    className="btn-action text-2xl transition ease-in-out delay-100  hover:text-success hover:font-bold"
                    onClick={onComplete}
                >
                    <BiCheckDouble />
                </button>
                <button
                    className="btn-action text-2xl  hover:text-red-600 transition ease-in-out delay-100  hover:font-bold "
                    onClick={onDelete}
                >
                    <BiTrash />
                </button>
                <button
                    className="btn-action text-2xl transition ease-in-out delay-100  hover:text-blue-800 hover:font-bold"
                    onClick={onEdit}
                >
                    <BiEditAlt />
                </button>
            </div>
        </div>
    );
};

export default Todo;
