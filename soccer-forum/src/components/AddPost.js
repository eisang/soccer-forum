import React, { Component } from "react";
import { InputGroup, Input, Button } from "reactstrap";
import { FaPaperPlane } from "react-icons/fa";

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
    this.setState({
      content: "",
      nickname: ""
    });
  };

  render() {
    return (
      <div className="container">
        <form
          onSubmit={this.handleSubmit}
          style={{
            backgroundColor: "light green",
            marginTop: "50px",
            padding: "25px"
          }}
        >
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
          <div style={{ marginTop: "15px", marginLeft: "20px" }}>
            <Button size="sm" color="info" style={{ marginLeft: "30px" }}>
              <FaPaperPlane />
            </Button>
          </div>
        </form>
      </div>
    );
  }
}
export default AddPost;
