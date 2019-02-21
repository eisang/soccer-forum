import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HeaderNav from "./components/HeaderNav";
import Home from "./components/Home";
import UserList from "./components/UserList";
// import PostList from "./components/PostList";
import AddPost from "./components/AddPost";

class App extends Component {
  state = {
    users: []
    // posts: []
  };

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
  // componentDidMount = async () => {
  //   try {
  //     const res = await fetch("http://localhost:3001/posts");
  //     const json = await res.json();
  //     this.setState({
  //       posts: json.map(post => {
  //         return {
  //           ...post
  //         };
  //       })
  //     });
  //   } catch (e) {
  //     alert(e);
  //   }
  // };

  render() {
    return (
      <Router>
        <div>
          <HeaderNav name="here" />

          <Route exact path="/" component={Home} />
          <Route
            path="/chat"
            render={props => <UserList users={this.state.users} />}
          />

          {/* <Route
            // path="/chat"
            render={props => <PostList posts={this.state.posts} />}
          /> */}

          <Route
            path="/chat"
            render={props => <AddPost addNewPost={this.addNewPost} />}
          />

          {/* <Route exact path="/chat" component={UserList} /> */}

          {/* <AddPost addNewPost={this.addNewPost} /> */}

          {/* <Route exact strict path="/" component={Home} /> */}

          {/* <Route
            exact
            path="/sing"
            render={() => {
              return <h4>Lets go Blues</h4>;
            }}
          /> */}
        </div>
      </Router>
    );
  }
}

export default App;
