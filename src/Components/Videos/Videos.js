import React from "react";

const Videos = () => {
  return (
    <section className="section">
      <div className="video__container custom-grid">
        <div className="video__head">
          <h2 className="video__title">Introducing iPhone 13 Pro</h2>
          <h5 className="video__subtitle">
            iPhone 13 just got release. Here is what you need to know about the
            new iPhone.
          </h5>
        </div>
        <div className="video__body">
          <iframe
            className="video__player"
            src="https://www.youtube.com/embed/nkyof8coGvk"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Videos;
