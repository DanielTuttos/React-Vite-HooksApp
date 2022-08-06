import React from 'react'
import { useTodos } from '../hooks/useTodos';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';


export const TodoApp = () => {

    const { todos, hndleNewTodo, handleDeleteTodo, handleToggleTodo, } = useTodos();

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
