import React from "react";
import { Card, CardText, CardBody, CardTitle } from "reactstrap";

const User = props => {
  console.log(props.user.nickname);
  return (
    <div>
      <Card style={{ width: "10%", height: "1%" }}>
        {/* <CardImg src={props.user.img_url} alt="hey" /> */}
        <CardBody>
          {/* <CardTitle>{props.user.nickname}</CardTitle> */}
          <CardText>{props.user.id}</CardText>
          <CardText>{props.user.nickname}</CardText>
          <CardText>{props.user.content}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default User;
