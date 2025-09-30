// Hero.jsx
import "./Hero.css";
import logoImg from "../assets/images/logo-3d.png";

function Hero() {
  return (
    <section className="hero" id="about">
      <div className="hero-content">
        <h2 className="hero-text light line1">Nós somos</h2>
        <h1 className="hero-text highlight line2">GUPASOLUTIONS,</h1>
        <h2 className="hero-text light line3">
          A solução que seu sistema <br />
          precisa.
        </h2>

        <a href="#projects" className="cta-btn line4">
          ACESSE NOSSO PORTFÓLIO
        </a>
      </div>

      <div className="hero-image">
        <img src={logoImg} alt="Logo GUPASOLUTIONS" />
      </div>
    </section>
  );
}

export default Hero;
