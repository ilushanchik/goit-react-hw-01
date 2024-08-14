import React from "react";
import css from "./FriendList.module.css"

const FriendListItem = ({ avatar, name, isOnline }) => {
   return (
     <div className={css.friendItem}>
       <img className={css.avatar} src={avatar} alt={`${name} avatar`} width="64" />
      <p className= {css.name}>{name}</p>
       <p className={`status ${isOnline ? css.online : css.offline}`}>
         {isOnline ? "Online" : "Offline"}
       </p>
     </div>
   );
 };

 export default FriendListItem;




