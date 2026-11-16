import React, { useEffect, useRef } from "react";
import "./Projects.css";
import globalLogo from "../../assets/images/global-hitss.png";
import tetraLogo from "../../assets/images/tetra-tech.png";
import prairieLogo from "../../assets/images/prairie-farms.png";
import seeDigitalLogo from "../../assets/images/see-digital.png";
import tecnofireLogo from "../../assets/images/tecnofire.png";
import redeflexLogo from "../../assets/images/rede-flex.png";
import bancoutilLogo from "../../assets/images/banco-util.png";

const clientsRow1 = [
  { name: "Global Hitss / Claro", logo: globalLogo, scaleClass: "logo-scale-lg" },
  { name: "Tetra Tech", logo: tetraLogo, scaleClass: "logo-scale-md" },
  { name: "Prairie Farms", logo: prairieLogo, scaleClass: "logo-scale-md" },
  { name: "Seeo", logo: seeDigitalLogo, scaleClass: "logo-scale-tight" },
];

const clientsRow2 = [
  { name: "Tecnofire", logo: tecnofireLogo, scaleClass: "logo-scale-lg" },
  { name: "Redeflex", logo: redeflexLogo, scaleClass: "logo-scale-lg" },
  {
    name: "Banco Útil",
    logo: bancoutilLogo,
    invertOnLight: true,
    scaleClass: "logo-scale-md",
  },
];

const Projects = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const rootEl = sectionRef.current;
    if (!rootEl) return;

    const revealElements = rootEl.querySelectorAll(".scroll-reveal");

    if (!("IntersectionObserver" in window)) {
      revealElements.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else if (entry.boundingClientRect.top > 0) {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -14% 0px",
      }
    );

    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="projects"
      id="projects"
      aria-labelledby="projects-title"
      ref={sectionRef}
    >
      <div className="projects-container">
        <header className="projects-header scroll-reveal">
          <div className="projects-heading-group">
            <span className="projects-eyebrow">CLIENTES &amp; PROJETOS</span>
            <h2 className="projects-title" id="projects-title">
              Quem já transformou seus sistemas
              <span className="projects-title-italic">com a GupaSolutions.</span>
            </h2>
          </div>

          <p className="projects-subtitle">
            Empresas e grandes operações que confiaram a arquitetura, a evolução e
            o desenvolvimento de seus sistemas críticos à nossa equipe.
          </p>
        </header>

        <div
          className="projects-levels"
          role="list"
          aria-label="Empresas clientes da GupaSolutions"
        >
          <div className="projects-level level-top">
            {clientsRow1.map((client, idx) => (
              <div
                className="client-card scroll-reveal"
                key={client.name}
                role="listitem"
                style={{ "--card-order": idx }}
              >
                <img
                  src={client.logo}
                  alt={`Logo ${client.name}`}
                  className={`client-logo ${client.scaleClass || ""} ${
                    client.invertOnLight ? "invert-on-light" : ""
                  }`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <div className="projects-level level-bottom">
            {clientsRow2.map((client, idx) => (
              <div
                className="client-card scroll-reveal"
                key={client.name}
                role="listitem"
                style={{ "--card-order": idx }}
              >
                <img
                  src={client.logo}
                  alt={`Logo ${client.name}`}
                  className={`client-logo ${client.scaleClass || ""} ${
                    client.invertOnLight ? "invert-on-light" : ""
                  }`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
