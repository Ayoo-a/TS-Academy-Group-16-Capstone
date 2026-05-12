import "./VideoSection.css";

function VideoSection() {
  return (
    <section className="content-section">

      <h2 className="section-title">
        Understanding Planetary Orbits
      </h2>

      <p className="section-description">
        Planets follow elliptical orbits around the Sun.
      </p>

      <div className="video-container">

        <video
          className="video-player"
          autoPlay
          muted
          loop
          controls
        >
          <source
            src="/videos/solar-system.mp4"
            type="video/mp4"
          />
        </video>

      </div>

    </section>
  );
}

export default VideoSection;