import React, { useState } from 'react';
function Todo({toDo,deleteTodo}){
     const [status,setStatus]=useState(true)
     const check=()=>{
         setStatus(!status);
     }
    return(
          <li className="todo" style={{'textDecoration':status ? 'none':'line-through'}}>{toDo.description}  
            <input type="checkbox" value={toDo.id} onClick={check}></input>
            <button className="delete-button" onClick={()=>deleteTodo(toDo.id)}>delete</button>
            </li> 

    )
}

export default Todo