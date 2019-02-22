import React from "react";
import User from "./User";

const UserList = ({ users, removeUserPost }) => {
  const userList =
    users.length > 0
      ? users.map(user => {
          return (
            <User key={user.id} user={user} removeUserPost={removeUserPost} />
          );
        })
      : null;
  return <div>{userList}</div>;
};

export default UserList;

// import React, { Component } from "react";
// import User from "./User";

// class UserList extends Component {
//   render() {
//     // console.log("users", this.props.users);
//     const userList =
//       users.length > 0
//         ? users.map(user => {
//             return (
//               <User
//                 key={user.id}
//                 user={user}
//                 // removeUserPost={this.removeUserPost}
//                 // newlyAddedPost={this.newlyAddedPost()}
//               />
//             );
//           })
//         : null;
//     return <div>{userList}</div>;
//   }
// }

// export default UserList;
