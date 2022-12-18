import React, { useState } from "react";
import BlogList from "./BlogList";
const Home = () => {

    const [blogs] = useState([
        {title:'PivotalSaints', body: '$SAINT', author: 'PivotalSaint', id: 1},
        {title:'DogeFathers', body: '$DFAJA', author: 'PivotalSaint', id: 2},
        {title:'DevilsBeneath', body: '$BURND', author: 'PivotalSaint', id: 3}
    ]);

  return (
    <div className="home">
        <BlogList blogs= { blogs } />
    </div>
  );
};

export default Home;
