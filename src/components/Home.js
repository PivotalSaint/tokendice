import React, { useState } from "react";
import BlogList from "./BlogList";
const Home = () => {

    const [blogs, setBlogs] = useState([
        {title:'PivotalSaints', body: '$SAINT', author: 'PivotalSaint', id: 1},
        {title:'DogeFathers', body: '$DFAJA', author: 'PivotalSaint', id: 2}
    ]);

  return (
    <div className="home">
        <BlogList blogs= { blogs } />
    </div>
  );
};

export default Home;
