import React from "react";

const User = props => {
  return (
    <div style={{ marginTop: "30px" }}>
      <ul style={{ listStyle: "none" }}>
        <li key={props.user.id}>
          <div style={{ width: "10%", height: "10%" }}>{props.user.image}</div>
          <div>{props.user.nickname}</div>
          <div>{props.user.content}</div>
          <i
            style={{ marginLeft: "520px", marginBottom: "50px" }}
            className="fa fa-trash-o"
            onClick={() => props.removeUserPost(props.user.id)}
          />
        </li>
      </ul>

      <hr />
    </div>
  );
};

export default User;
