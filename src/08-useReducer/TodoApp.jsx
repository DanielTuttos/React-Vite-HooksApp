import React, { useEffect, useReducer } from 'react'
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';

const initialState = []

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])


    const hndleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }
        dispatch(action);
    }

    const handleDeleteTodo = (id) => {
        // console.log(id);
        const action = {
            type: '[TODO] Delete Todo',
            payload: id
        }
        dispatch(action);
    }

    const handleToggleTodo = (id) => {
        console.log(id);
        const action = {
            type: '[TODO] Toggle Todo',
            payload: id
        }
        dispatch(action);
    }

    return (
        <>
            <h1>TodoApp:10, <small>Pendientes: 2</small> </h1>
            <hr />

            <div className="row">

                <div className="col-7">
                    <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} onToggleTodo={handleToggleTodo} />
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    {/* Todo app onNewTodo(todo)*/}
                    <TodoAdd onNewTodo={hndleNewTodo} />
                </div>
            </div>
        </>
    )
}
