import { useContext } from "react";
import TodoContext from "../store/todo-context";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

// type TodosProps = {
//     items: Todo[];
//     onRemoveItem(todo: string): void;
//     children?: ReactNode; // this is just needed if you need children if not use below
//     // Todos: React.FC<{items: Array<Todo>}> = ({items})
// };
const Todos = () => {
    const { items, removeTodo } = useContext(TodoContext);

    return (
        <ul className={classes.todos}>
            {items.map((item) => (
                <TodoItem
                    key={item.getId()}
                    todoItem={item}
                    removeItem={() => removeTodo(item.getId())}
                />
            ))}
        </ul>
    );
};
export default Todos;
