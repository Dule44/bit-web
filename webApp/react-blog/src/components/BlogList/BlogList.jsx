import React from "react";

import { BlogItem } from "../BlogItem/BlogItem";
import { blogPosts } from "../data/blog-posts.js";
import './BlogList.css';

export const BlogList = () => {
  return (
    <div className="blogList">
      {blogPosts.map((post, index) => (
        <BlogItem className="blogItem" key={index} post={post} />
      ))}
    </div>
  );
};
