import React from "react";
const BlogList = ({ blogs, title, handleClick}) => {

    return (
    <div className="blog-list">
        <h2> { title } </h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2> {blog.title} </h2>
          <p>Artistic Piece: Created by {blog.author}</p>
          <button className="button" onClick={() => handleClick(blog.id)}>{blog.body}</button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
