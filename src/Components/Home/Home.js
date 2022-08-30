import React, { useContext, useEffect } from "react";
import { BlogContext } from "../../App";
import Blog from "../Blog/Blog";

const Home = () => {
  const [blogs, setBlogs] = useContext(BlogContext);
  console.log(blogs);
  useEffect(() => {
    fetch(`fakeData/data.json`)
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, [setBlogs]);

  return (
    <section className="home">
      <div className="blog-container custom-grid">
        {blogs.map(blog => <Blog key={blog._id} blogData={blog} />)}
      </div>
    </section>
  );
};

export default Home;
