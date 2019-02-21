// import React, { Component } from "react";
// import User from "./User";

// class UserList extends Component {
//   state = {
//     searchCriteria: "",
//     type: "name"
//   };
//
//   handleChange = e => {
//     const { name, value } = e.target;
//     this.setState({
//       [name]: value
//     });
//   };

//   render() {
//     const userList =
//       this.props.users.length > 0
//         ? this.props.users
//             .filter(user => {
//               return user[this.state.type].includes(this.state.searchCriteria);
//             })
//             .map(user => <User key={user.id} user={user} />)
//         : null;

//     return (
//       <div>
//         <form>
//           <input
//             style={{
//               marginLeft: "5px",
//               marginTop: "30px",
//               marginBottom: "20px"
//             }}
//             type="text"
//             placeholder="search"
//             onChange={this.handleChange}
//             value={this.state.searchCriteria}
//             name="searchCriteria"
//           />
//         </form>
//         {userList}
//       </div>
//     );
//   }
// }

// export default UserList;

import React from "react";
import User from "./User";

const UserList = ({ users }) => {
  const userList =
    users.length > 0
      ? users.map(user => {
          return <User key={user.id} user={user} />;
        })
      : null;
  return <div>{userList}</div>;
};

export default UserList;
