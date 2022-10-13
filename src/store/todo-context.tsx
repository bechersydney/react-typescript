import React, { ReactNode, useState } from "react";
import Todo from "../types/todo";

interface ItodoCtx {
    items: Todo[];
    addTodo(id: string): void;
    removeTodo(id: string): void;
}

const TodoContext = React.createContext<ItodoCtx>({
    items: [],
    addTodo: (todo: string) => {},
    removeTodo: (todo: string) => {},
});

export default TodoContext;

interface ITodoProvCtx {
    children?: ReactNode;
}

export const TodoProvider = ({ children }: ITodoProvCtx) => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodoItemHandler = (todoName: string) => {
        setTodos((prevTodos) => {
            return prevTodos.concat(new Todo(todoName));
        });
    };

    const removeTodoHandler = (todoId: string) => {
        setTodos((prevTodos) => {
            return prevTodos.filter((todo) => todo.getId() !== todoId);
        });
    };
    return (
        <TodoContext.Provider
            value={{
                items: todos,
                addTodo: addTodoItemHandler,
                removeTodo: removeTodoHandler,
            }}
        >
            {children}
        </TodoContext.Provider>
    );
};
