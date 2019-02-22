import React from "react";

const User = props => {
  return (
    <div>
      <ul style={{ listStyle: "none" }}>
        <li key={props.user.id}>
          <div>{props.user.nickname}</div>
          <div>{props.user.content}</div>
        </li>
      </ul>
      {/* <button onClick={() => props.removeUserPost(props.user.id)}> */}
      <i
        className="fa fa-trash-o"
        onClick={() => props.removeUserPost(props.user.id)}
      />

      {/* </button> */}
      <hr />
    </div>
  );
};

export default User;
