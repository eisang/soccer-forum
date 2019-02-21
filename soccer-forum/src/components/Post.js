import React from "react";
import { Card, CardBody, CardText } from "reactstrap";

const Post = props => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardText>{props.post.posts_content}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default Post;