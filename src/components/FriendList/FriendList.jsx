import React from "react";
import FriendListItem from "./FriendListItem";
import css from "./FriendList.module.css"

const FriendList = ({ friends }) => {
  return (
    <ul className = {css.friendList}>
      {friends.map(friend => (
        <li key={friend.id} className="friend-list-item">
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;