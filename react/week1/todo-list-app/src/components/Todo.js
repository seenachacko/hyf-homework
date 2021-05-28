import React from 'react';
import './Todo.css'
function Todo(props) {
    return (
        <div>
            <tr>
                <td>{props.item.id}</td>
                <td>{props.item.todo}</td>
                <td>{props.item.deadline}</td>
            </tr>
        </div>
    );
}
export default Todo;