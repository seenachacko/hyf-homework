import React from 'react';
import Todo from './Todo';
import './Todo.css'

function Mylist() {
    const todoList = [
        { id :1,todo: 'Get out of bed', deadline: 'Wed Sep 13 2017' },
        { id :2,todo: 'Brush teeth', deadline: 'Thu Sep 14 2017' },
        { id:3,todo: 'Eat breakfast', deadline: 'Fri Sep 15 2017' }
    ];
    const todoItem = todoList.map(element=> <Todo key={element.id} item={element} /> )
    return (
            <table>
            { todoItem}
            </table>

    );
}
export default Mylist;