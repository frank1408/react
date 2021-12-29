import React from 'react';
import './Comentario.css';
import UserInfo from './UserInfo/UserInfo';
export function Comentario( props ){
return (
<div className="Comentario">
<UserInfo user={ props.usuario } />
<div className="Fecha"      >{ props.fecha      }</div>
<div className="Informacion">{ props.comentario }</div>
</div>
); // return 
} // Comentario
export default Comentario;
