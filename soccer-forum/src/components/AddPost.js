import React, { Component } from "react";
import { InputGroup, Input, Button } from "reactstrap";

class AddPost extends Component {
  state = {
    content: "",
    nickname: ""
  };

  handleContentChange = e => {
    this.setState({
      content: e.target.value
    });
  };

  handleNameChange = e => {
    this.setState({
      nickname: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const newPost = {
      content: this.state.content,
      nickname: this.state.nickname
    };
    this.props.addNewPost(newPost);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} style={{ backgroundColor: "grey" }}>
          <div>
            <InputGroup style={{ bsize: "large", paddingLeft: "30px" }}>
              <Input
                placeholder="enter your post"
                type="text"
                name="content"
                onChange={this.handleContentChange}
                value={this.state.content}
              />
            </InputGroup>
            <br />
          </div>
          <div>
            <InputGroup style={{ bsize: "large", paddingLeft: "30px" }}>
              <Input
                placeholder="nickname"
                type="text"
                name="nickname"
                onChange={this.handleNameChange}
                value={this.state.nickname}
              />
            </InputGroup>
          </div>
          <div style={{ marginTop: "15px" }}>
            <Button color="info" style={{ marginLeft: "30px" }}>
              Submit
            </Button>
          </div>
        </form>
      </div>
    );
  }
}
export default AddPost;
