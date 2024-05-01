import React from "react";
import { Outlet, Routes, Route, useParams } from "react-router-dom";
import Post from "./Post";
import PostLink from "./PostLink";
import NoPostSelectedMessage from "./NoPostSelectedMessage";

/*
  TODO: Update the below so that the components show on the appropriate route.
  
  Hint: you can use the `useParams()` hook from "react-router-dom" to get the userId

  The <NoPostSelectedMessage /> component should show up on the following route:
  /users/:userId/posts

  The <Post /> component should show up on the following route:
  /users/:userId/posts/:postId
*/

export const PostList = ({ posts }) => {
  const {userId} = useParams();
  const postLinks = posts.map((post) => (
    <PostLink key={post.id} userId={post.userId} post={post} />
  ));

  return (
    <div className="row pt-2">
      <div className="col-3">
        <ul className="list-group">{postLinks}</ul>
      </div>
      <div className="col-9">
        <Routes>
          <Route path="" element={<NoPostSelectedMessage />} />
          <Route path=":postId" element={<Post posts={posts} />} />
        </Routes>
      </div>
    </div>
  );
};
// <Route path=":postId" element={<Post posts={posts} />} />
// <NoPostSelectedMessage />
// <Post posts={posts} />
export default PostList;
