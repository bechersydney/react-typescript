import Todo from "../types/todo";
import classes from "./TodoItem.module.css";
interface ITodoItem {
    todoItem: Todo;
    removeItem(): void;
}

const TodoItem = ({ todoItem, removeItem }: ITodoItem) => {
    return (
        <li className={classes.item}>
            {todoItem.getName()}
            <span style={{ float: "right" }}>
                {" "}
                <button onClick={removeItem}>X</button>
            </span>
        </li>
    );
};

export default TodoItem;
