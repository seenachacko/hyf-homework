import React from 'react';
import './Todo.css'
function Todo(props) {
    console.log(props);
    return (
        <div>
            <table>
                <tr>
                    <td>{props.item.id}</td>
                    <td>{props.item.todo}</td>
                    <td>{props.item.deadline}</td>
                </tr>
            </table>
        </div>
    );
}
export default Todo;