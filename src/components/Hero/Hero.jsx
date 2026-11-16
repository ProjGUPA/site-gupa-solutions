import { useEffect, useRef, useState } from "react";
import "./Hero.css";
import heroEndframe from "../../assets/images/hero_image.png";
import heroVideo from "../../assets/videos/hero_video.mp4";

function Hero() {
  const [videoEnded, setVideoEnded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    videoEl.muted = true;
    videoEl.defaultMuted = true;
    videoEl.volume = 0;
  }, []);

  const handleLoadedMetadata = (e) => {
    e.currentTarget.muted = true;
    e.currentTarget.volume = 0;
  };

  return (
    <section className="hero" id="about">
      <div className="hero-media" aria-hidden="true">
        <video
          ref={videoRef}
          className={`hero-video ${videoEnded ? "is-ended" : ""}`}
          src={heroVideo}
          autoPlay
          muted
          playsInline
          preload="auto"
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={() => setVideoEnded(true)}
          onError={() => setVideoEnded(true)}
        />
        <img
          src={heroEndframe}
          alt=""
          decoding="async"
          fetchPriority="high"
          className={`hero-endframe ${videoEnded ? "is-visible" : ""}`}
        />
      </div>

      <div className="hero-overlay" aria-hidden="true" />

      <div className="hero-content">
        <p className="hero-text intro line1">Nós somos a</p>
        <h1 className="hero-text brand line2">GUPASOLUTIONS</h1>
        <h2 className="hero-text tagline line3">
          A inteligência e a tecnologia <br />
          que o seu sistema precisa.
        </h2>

        <div className="hero-actions line4">
          <a href="#contact" className="hero-btn primary">
            FALE CONOSCO
          </a>
          <a href="#projects" className="hero-btn secondary">
            NOSSOS CLIENTES
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
