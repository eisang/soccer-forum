import React from "react";
import { Card, CardImg, CardBody, CardTitle } from "reactstrap";

const User = props => {
  return (
    <div>
      <Card style={{ width: "10%", height: "1%" }}>
        <CardImg src={props.user.img_url} alt="hey" />
        <CardBody>
          <CardTitle>{props.user.nickname}</CardTitle>
        </CardBody>
      </Card>
    </div>
  );
};

export default User;
