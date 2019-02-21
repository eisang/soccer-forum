import React from "react";
import Post from "./Post";

const PostList = ({ posts }) => {
  const postList =
    posts.length > 0
      ? posts.map(post => {
          return <Post key={post.id} post={post} />;
        })
      : null;
  return <div>{postList}</div>;
};

export default PostList;
