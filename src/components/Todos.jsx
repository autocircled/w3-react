import React, { useReducer } from 'react';
import todos from './todos';
const initialData = [
    { id: 1, title: 'Task 1', completed: false },
    { id: 2, title: 'Task 2', completed: true },
    { id: 3, title: 'Task 3', completed: false },
    { id: 4, title: 'Task 4', completed: false }
];

const reducer = (state, action) => {
    const lastId = state[Object.keys(state)[Object.keys(state).length - 1]].id;
    switch (action.type) {
        case 'COMPLETED':
            return state.map((todo) => {
                if (todo.id === action.id) {
                    return { ...todo, completed: !todo.completed };
                } else {
                    return todo;
                }
            });
        case 'ADD':
            return [...state, { id: lastId + 1, title: action.title, completed: false }];
        default:
            return state;
    }
}
const Todos = () => {
    const [todos, dispatch] = useReducer(reducer, initialData);

    const handler = (todo) => {
        dispatch({ type: "COMPLETED", id: todo.id });
    }

    console.log(todos);
    const ulStyles = {
        listStyle: 'none',
        padding: 0
    }
    const submitHandler = (e) => {
        e.preventDefault();
        const title = e.target[0].value;
        // console.log(title);
        if (!title) return;
        dispatch({ type: 'ADD', title });
    }
    return (
        <div>
            <h1>My Tasks</h1>



            <form onSubmit={submitHandler}>
                <p><input type="text" placeholder="Add Task" /></p>
                <p><button>Add New Task</button></p>
            </form>



            <ul style={ulStyles}>
                {todos.map((todo) => (
                    <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : '' }}>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => handler(todo)} />
                        {todo.title}
                    </li>
                ))}
            </ul>
        </div >
    );
}

export default Todos;