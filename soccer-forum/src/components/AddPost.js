import React, { Component } from "react";
import { InputGroup, Input, Button } from "reactstrap";

class AddPost extends Component {
  state = {
    user_name: "",
    content: ""
  };

  handlePostChange = e => {
    this.setState({
      post: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const newPost = {
      user_name: this.state.user_name,
      content: this.state.content
    };
    this.props.addNewPost(newPost);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <h4 style={{ marginTop: "60px", paddingLeft: "30px" }}>
              Add A Post
            </h4>
            <label style={{ marginTop: "20px", paddingLeft: "30px" }}>
              Post
            </label>
            <InputGroup style={{ bsize: "large", paddingLeft: "30px" }}>
              <Input
                placeholder="post"
                type="text"
                name="post"
                onChange={this.handlePostChange}
                value={this.state.post}
              />
            </InputGroup>
            <br />
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
