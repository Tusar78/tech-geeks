import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch(`fakeData/data.json`)
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <section className="home">
      <div className="blog-container">
        {blogs.map(blog => <Blog key={blog._id} blogData={blog} />)}
      </div>
    </section>
  );
};

export default Home;
