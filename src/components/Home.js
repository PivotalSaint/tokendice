import React, { useState, useEffect } from "react";
import BlogList from "./BlogList";
const Home = () => {

    const [blogs, setBlogs] = useState([
        {title:'PivotalSaints', body: '$SAINT', author: 'PivotalSaint', id: 1},
        {title:'DogeFathers', body: '$DFAJA', author: 'PivotalSaint', id: 2},
        {title:'DevilsBeneath', body: '$BURND', author: 'PivotalSaint', id: 3}
    ]);

    const handleClick = (id) => {
      const newBlogs = blogs.filter(blog => blog.id !== id);
      setBlogs(newBlogs);
    }

    useEffect(() => {
      console.log('use effect ran')
    });
    
  return (
    <div className="home">
        <BlogList blogs= { blogs } handleClick = {handleClick}/>
    </div>
  );
};

export default Home;
