import React, { Component } from "react";
import { InputGroup, Input, Button } from "reactstrap";

class AddPost extends Component {
  state = {
    content: ""

    // users_id: ""
  };

  handleContentChange = e => {
    this.setState({
      content: e.target.value
    });
  };

  //   handleChange = e => {
  //     this.setState({
  //       user_name: e.target.value
  //     });
  //   };

  handleSubmit = e => {
    e.preventDefault();
    const newPost = {
      nickname: this.state.nickname,
      content: this.state.content
      //   users_id: this.state.users_id
    };
    this.props.addNewPost(newPost);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            {/* <label style={{ marginTop: "20px", paddingLeft: "30px" }}>
              Post
            </label> */}
            <InputGroup style={{ bsize: "large", paddingLeft: "30px" }}>
              <Input
                placeholder="post"
                type="text"
                name="content"
                onChange={this.handleContentChange}
                value={this.state.content}
              />
            </InputGroup>
            <br />
          </div>
          {/* <div>
            <label style={{ paddingLeft: "35px" }}>users_id</label>
            <InputGroup style={{ bsize: "large", paddingLeft: "30px" }}>
              <Input
                bsize="large"
                placeholder="users_id"
                type="text"
                name="user_name"
                onChange={this.handleUserChange}
                value={this.state.users_id}
              />
            </InputGroup>
          </div> */}
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
