import React, { useRef, useEffect, useState } from 'react';
import './ListaDePendientes.css';
import { TodoList } from './TodoList';
import { v4 as uuidv4 } from 'uuid';

export function ListaDePendientes(){

const [ porHacer, setPorHacer ] = useState([
{ id: 1, pendiente: 'Comprar ingredientes.', completado: false },
{ id: 2, pendiente: 'Preparar receta.', completado: false },
{ id: 3, pendiente: 'Comer...', completado: false },
{ id: 4, pendiente: 'Lavar platos...', completado: false },
]);

const newPendiente = useRef();
const KEY = 'pendientesPorHacer';

useEffect( () => {
	localStorage.setItem(KEY, JSON.stringify(porHacer) )
}, [porHacer]);

useEffect( () => {
    const pendientesPorHacer = JSON.parse(localStorage.getItem(KEY));
    if( pendientesPorHacer ){
        setPorHacer( pendientesPorHacer );
    } // if
}, []);

const addPendiente = () => {

    const xp = newPendiente.current.value;

    if (xp === '') {
        return;
    }

    setPorHacer( (currentStateArrayPorHacer) => {
    return [ 
            ...currentStateArrayPorHacer,
            {id: uuidv4(), pendiente: xp, completado:false}
            ];
    }); // setPorHacer

    newPendiente.current.value = null;

} // agregarPendiente


const delPendiente = () => {
    const lista = porHacer.filter(
        ( item ) => ( !item.completado )
    );
    setPorHacer( lista );
} // delPendiente


const toggleEstadoTerminado = ( id ) => {

    const currentStatePendientes = [...porHacer];

    const unPendienteX = currentStatePendientes.find(
        ( item ) => ( item.id === id )
    );

    unPendienteX.completado = !unPendienteX.completado;

    setPorHacer( currentStatePendientes );

} // toggleEstadoTerminado 

return (
<div className='ListaDePendientes'>
<h1>PENDIENTES {porHacer.filter( ( item ) => !item.completado ).length}</h1>
<input type='text'   ref={newPendiente}                 /> // usando "const newPendiente = useRef();"
<input type='button' value='➕' onClick={addPendiente}  />
<input type='button' value='🗑' onClick={delPendiente}  />
<TodoList items={ porHacer } togglePorHacer={ toggleEstadoTerminado } />
</div>
); // return

} // ListaDePendientes

export default ListaDePendientes;
