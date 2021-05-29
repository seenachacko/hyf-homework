import React, { useState } from 'react';
import '../App.css'
function Todo({toDo,deleteTodo}){
     const [status,setStatus]=useState(true)
     const check=()=>{
         setStatus(!status);
     }
    return(
        <div className="todo">
          <li style={{'textDecoration':status ? 'none':'line-through'}}>{toDo.description}  
            <input type="checkbox" value={toDo.id} onClick={check}></input>
            <button className="deletebutton" onClick={()=>deleteTodo(toDo.id)}>delete</button>
            </li> 
        </div>
    )
}

export default Todo