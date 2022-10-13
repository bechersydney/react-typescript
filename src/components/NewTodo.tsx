import React, { useContext, useRef } from "react";
import classes from "./NewTodo.module.css";
import TodoContext from "../store/todo-context";

// interface INewTodo {
//     addTodo(todo: string): void;
// }

const NewTodo = () => {
    const newTodoRef = useRef<HTMLInputElement>(null);
    const { addTodo } = useContext(TodoContext);
    const onSubmitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        const newInputText = newTodoRef.current!.value;
        if (!newInputText.trim()) {
            return;
        }
        addTodo(newInputText);
    };
    return (
        <form className={classes.form} onSubmit={onSubmitHandler}>
            <label htmlFor="">Todo Text</label>
            <input type="text" name="" id="" ref={newTodoRef} />
            <button>Add Todo</button>
        </form>
    );
};
export default NewTodo;
