import React from 'react';
import { TodoItem } from './TodoItem';

export function TodoList( {items, togglePorHacer} ){
/*
<TodoList items={} togglePorHacer={} />
togglePorHacer es una funcion que recibo para pasarla nuevamente al 
<TodoItem item={} key={} toggleItemPorHacer={ togglePorHacer } />
*/

return ( <ul className="TodoList">
{ items.map( (i) => (
    <TodoItem item={i} 
        key={i.id}
        toggleItemPorHacer={ togglePorHacer } />
))} </ul>
);
} // TodoList()

