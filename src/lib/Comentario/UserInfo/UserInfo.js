import React from 'react';
import './UserInfo.css';
import Avatar from '../Avatar/Avatar';
export function UserInfo( props ){
return (
<div className="UserInfo">
<Avatar user={props.user} />
<div className="UserInfoName">{props.user.name + ":"}</div>
</div>); // return 
} // UserInfo
export default UserInfo;
