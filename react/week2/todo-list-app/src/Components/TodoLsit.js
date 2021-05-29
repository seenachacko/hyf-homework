import React from 'react';
import Todo from './Todo'
import '../App.css'
function Todolist({ toDoList,deleteTodo }) {
    return (
        <div>
            <ul>
            {toDoList.length > 0 ?
            toDoList.map(item => 
                (
                    <Todo key={item.id} toDo={item} deleteTodo={deleteTodo} />
                )
            ): 'No items left !!!'}
         </ul>  
        </div>
    )
}


export default Todolist;