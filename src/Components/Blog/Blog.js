import React from "react";
import { useNavigate } from "react-router-dom";
import indicator from "../../Assets/Image/indicator.svg";

const Blog = ({ blogData }) => {
  const navigate = useNavigate();
  const { _id, admin, blog, title, imageName, imageURL } = blogData;
  return (
    <div className="blog">
      <img src={imageURL} alt={imageName} className="blog__img" />
      <div className="blog__info">
        <div className="blog__head">
          <h2 className="blog__title">{title}</h2>
          <div className="blog__subtitle">
            <img src={indicator} alt="Indicator" className="blog__subtitle-img" />
            <h5 className="blog__subtitle-text">Posted By {admin}</h5>
          </div>
        </div>
        <div className="blog__body">
          <p className="blog__text">{blog.length > 400 ? blog.substr(0, 400) : blog} <span className="blog__read-more" onClick={() => navigate(`/blog/${_id}`)}>{blog.length > 400 ? 'Read More...' : ''}</span></p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
