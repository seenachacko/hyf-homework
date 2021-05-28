import React from 'react';
import './Todo.css'
function Todo(props) {
    return (

            <table>
                    <td>{props.item.id}</td>
                    <td>{props.item.todo}</td>
                    <td>{props.item.deadline}</td>
            </table>
        
    );
}
export default Todo;