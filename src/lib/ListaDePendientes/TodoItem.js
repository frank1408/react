import React from 'react';

export function TodoItem( {item, toggleItemPorHacer} ){
/*
<TodoItem item={someItem} toggleItemPorHacer={} />
let someItem = {
    id: 2,
    pendiente: "realizar ...",
    completado: false
} 
*/
const { id, pendiente, completado } = item ;

const cambiarEstadoTerminado = () => {
    toggleItemPorHacer(id); // este id es de someItem
} // cambiarEstadoTerminado 

return ( <li className="TodoItem">
<input type='checkbox'
    onChange={cambiarEstadoTerminado}
    checked={completado} // este completado es de someItem
    class='seleccionable' />
    {pendiente} // este pendiente es de someItem
</li> );
} // TodoItem()

