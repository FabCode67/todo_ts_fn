import React from "react";

type Props = TodoProps & {
    updateTodo: (todo: ITodo) => void;
    deleteTodo: (_id: string) => void;
};

const Todo: React.FC<Props> = ({ todo, updateTodo, deleteTodo }) => {
    const checkTodo: string = todo.status? 'line-through' : ''
    return (
        <div className="Card">
            <div className="Card--text">
                <h1 className={checkTodo}>{todo.firstname}</h1>
                <span className={checkTodo}>{todo.lastname}</span>
                <span className={checkTodo}>{todo.email}</span>
                <span className={checkTodo}>{todo.password}</span>
                <span className={checkTodo}>{todo.age}</span>
                </div>
                <div className="Card--button">
                    <button
                        onClick={() => updateTodo (todo)}
                        className={todo.status ? `hide-button` : 'Card--button__done'}
                        >
                            Complete
                        </button>
                        <button
                            onClick={() => deleteTodo (todo._id)}
                            className='Card--button__delete'
                            >
                                Delete
                            </button>
                            </div>

                </div>
    )}

    export default Todo