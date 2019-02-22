import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HeaderNav from "./components/HeaderNav";
import Home from "./components/Home";
import UserList from "./components/UserList";
import AddPost from "./components/AddPost";
import axios from "axios";

class App extends Component {
  state = {
    users: []
  };

  // newlyAddedPost = () => this.state.users.filter(user => user.addedPost);

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
        console.log(json);
        this.setState(prevState => {
          return {
            users: [
              ...prevState.users,
              {
                id: json[0].id,
                nickname,
                content
              }
            ]
          };
        });
      });
  };

  removeUserPost = id => {
    axios.delete(`http://localhost:3001/users/${id}`).then(res => {
      const individualUsers = this.state.users.filter(user => user.id !== id);
      this.setState({
        users: [...individualUsers]
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
    return (
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
              />
            )}
          />
          <Route
            path="/chat"
            render={props => <AddPost addNewPost={this.addNewPost} />}
          />
        </div>
      </Router>
    );
  }
}

export default App;
