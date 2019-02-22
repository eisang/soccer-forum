import React from "react";
import User from "./User";

const UserList = ({ users, removeUserPost }) => {
  const userList =
    users.length > 0
      ? users.map(user => {
          return (
            <User key={users.id} user={user} removeUserPost={removeUserPost} />
          );
        })
      : null;
  return <div>{userList}</div>;
};

export default UserList;
