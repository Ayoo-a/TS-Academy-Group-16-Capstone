import React from "react";
import "./VideoSection.css";

const VideoSection = () => {
  return (
    <section className="video-section">

      {/* Heading */}
      <div className="video-text">
        <h2>How Planetary Data Helps Us Understand Space</h2>

        <p>
          Mass. Diameter. Gravity. Density. 
          The numbers that reveal how planets are born, behave, 
          and belong to the solar system.
        </p>
      </div>

      {/* Video Container */}
      <div className="video-container">

        <video
          autoPlay
          loop
          muted
          playsInline
          className="space-video"
        >
          <source src="/videos/space.mp4" type="video/mp4" />
        </video>
      </div>

    </section>
  );
};

export default VideoSection;