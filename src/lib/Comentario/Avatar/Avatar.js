import React from 'react';
import './Avatar.css';

export function Avatar( props ){
return (
<img src={props.user.picURL} alt={props.user.name} className="Avatar" />
); // return 

} // Avatar

export default Avatar;
