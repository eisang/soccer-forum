import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HeaderNav from "./components/HeaderNav";
import Home from "./components/Home";
import UserList from "./components/UserList";
import AddPost from "./components/AddPost";
import axios from "axios";
// import Container from "Container";

class App extends Component {
  state = {
    users: []
  };

  newlyAddedPost = () => this.state.users.filter(user => user.addedPost);

  addNewPost = newPost => {
    const { nickname, content } = newPost;
    fetch("http://localhost:3001/users", {
      method: "post",
      body: JSON.stringify({ nickname, content }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(json => {
        this.setState(prevState => {
          return {
            users: [
              ...prevState.users,
              {
                nickname,
                content
              }
            ]
          };
        });
      });
  };

  removeUserPost = id => {
    // console.log(this.removeUserPost)
    axios.delete(`http://localhost:3001/users/${id}`).then(res => {
      const individualUsers = this.state.users.filter(user => user.id !== id);
      console.log("removeUserPost", this.removeUserPost);
      this.setState({
        users: [...individualUsers, ...res.data]
      });
    });
  };

  componentDidMount = async () => {
    try {
      const res = await fetch("http://localhost:3001/users");
      const json = await res.json();
      this.setState({
        users: json.map(user => {
          return {
            ...user
          };
        })
      });
    } catch (e) {
      alert(e);
    }
  };

  render() {
    // console.log("users", users);
    return (
      // <Container>
      <Router>
        <div>
          <HeaderNav name="here" />
          <Route exact path="/" component={Home} />
          <Route
            path="/chat"
            render={props => (
              <UserList
                users={this.state.users}
                removeUserPost={this.removeUserPost}
                // newlyAddedPost={this.addedPost()}
              />
            )}
          />
          <Route
            path="/chat"
            render={props => <AddPost addNewPost={this.addNewPost} />}
          />
        </div>
      </Router>
      // </Container>
    );
  }
}

export default App;
