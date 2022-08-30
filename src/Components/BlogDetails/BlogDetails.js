import React, { useContext } from 'react';
import { MdArrowBackIos } from 'react-icons/md';
import { useNavigate, useParams } from 'react-router-dom';
import { BlogContext } from '../../App';

const BlogDetails = () => {
  const { id } = useParams();
  const [blogs] = useContext(BlogContext);
  console.log(blogs);
  const blogData = blogs.find(blog => blog._id === id);
  const navigate = useNavigate();

  return (
    <section className='section'>
      <div className="blog-details__head">
        <button className='blog-details__back' onClick={() => navigate(-1)}>
          <MdArrowBackIos className='blog-details__back-icon' />
          Back
        </button>
      </div>

      <div className="blog-details__body custom-grid">
        <img src={blogData?.imageURL} alt={blogData?.imageName} className="blog-details__img" />
        <h2 className="blog-details__title">{blogData?.title}</h2>
        <p className="blog-details__text">{blogData?.blog}</p>
      </div>
    </section>
  );
};

export default BlogDetails;