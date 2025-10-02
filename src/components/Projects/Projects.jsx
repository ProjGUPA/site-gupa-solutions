import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import "./Projects.css";
import globalLogo from "../../assets/images/global-hitss.png";
import tetraLogo from "../../assets/images/tetra-tech.png";
import prairieLogo from "../../assets/images/prairie-farms.png";
import tecnofireLogo from "../../assets/images/tecnofire.png";
import redeflexLogo from "../../assets/images/rede-flex.png";
import bancoutilLogo from "../../assets/images/banco-util.png";

const Projects = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );
  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  const slides = [
    {
      name: "Global Hitss/Claro",
      logo: globalLogo,
      desc: "Estamos engajados em uma parceria de longo prazo com a GlobalHitss/Claro, onde atuamos em uma equipe ágil que segue rigorosamente a metodologia SCRUM. Nosso foco principal é o desenvolvimento de um sistema de chatbot inovador que facilita a oferta e compra de produtos via WhatsApp. Além de criar novos fluxos de conversa, também participamos na criação de novos produtos que melhoram a experiência do usuário.",
      techs: [
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-plain.svg" },
        { name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg" },
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
        { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
        { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
      ],
    },
    {
      name: "Tetra Tech",
      logo: tetraLogo,
      desc: "Na TetraTech, colaboramos em uma série de projetos dentro da área de Engenharia, com especialização em barragens e estruturas geológicas. Atuamos de forma fullstack, abrangendo desde o backend até o frontend, além de desempenhar papéis chave na gestão de projetos. Nossa atuação inclui a liderança de equipes e a aplicação de princípios SCRUM, garantindo entregas pontuais e de alta qualidade.",
      techs: [
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
        { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg" },
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-plain.svg" },
        { name: "SQL Server", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
        { name: "Cassandra", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cassandra/cassandra-original.svg" },
        { name: "Kafka", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachekafka/apachekafka-original.svg" },
        { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
      ],
    },
    {
      name: "Prairie Farms",
      logo: prairieLogo,
      desc: "Na Praire Farms, desenvolvemos e implementamos a integração entre o sistema de gerenciamento de compras e a plataforma SAP. Nossa atuação envolveu desde o desenho da arquitetura até a execução técnica da solução, garantindo que os dados fossem centralizados e disponibilizados para utilização estratégica da empresa.",
      techs: [
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-plain.svg" },
        { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" },
      ],
    },
    {
      name: "Tecnofire",
      logo: tecnofireLogo,
      desc: "Na Tecnofire, sugerimos e desenvolvemos um sistema de inteligência artificial para reconhecimento e classificação de materiais refratários. A solução foi projetada para reduzir falhas de identificação no processo manual, garantindo maior precisão e agilidade na separação dos elementos. Como parte do treinamento da IA, também foi criado um aplicativo mobile que permite aos colaboradores registrar imagens dos materiais, contribuindo para o aprimoramento contínuo do modelo.",
      techs: [
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
        { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
        { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" },
        { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactnative/reactnative-original-wordmark.svg" },
        { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
      ],
    },
    {
      name: "Redeflex",
      logo: redeflexLogo,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quae quaerat facilis iure voluptates cumque? Earum obcaecati quis ipsum illum consectetur, nesciunt doloribus ducimus eaque voluptatem dolore, nostrum delectus vitae!",
      techs: [
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-plain.svg" },
        { name: "SpringBoot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" },
        { name: "SQLServer", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
        { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
      ],
    },
    {
      name: "Banco Útil",
      logo: bancoutilLogo,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quae quaerat facilis iure voluptates cumque? Earum obcaecati quis ipsum illum consectetur, nesciunt doloribus ducimus eaque voluptatem dolore, nostrum delectus vitae!",
      techs: [
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-plain.svg" },
        { name: "SpringBoot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" },
        { name: "Oracle", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg" },
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
        { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
        { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
      ],
    },
  ];

  return (
    <section className="projects" id="projects" aria-labelledby="projects-title">
      <h2 className="projects-title" id="projects-title">
        Nossos Projetos
      </h2>

      {/* Viewport do carrossel */}
      <div
        className="projects-slider"
        ref={emblaRef}
        role="region"
        aria-roledescription="carousel"
        aria-label="Projetos em destaque"
        aria-live="polite"
      >
        <div className="projects-slides">
          {slides.map((proj, i) => (
            <div
              className="projects-slide"
              key={i}
              role="group"
              aria-roledescription="slide"
              aria-label={`${proj.name}, slide ${i + 1} de ${slides.length}`}
            >
              <div className="project-row">
                <div className="brand-card">
                  {proj.logo && (
                    <img
                      src={proj.logo}
                      alt={`Logo da empresa ${proj.name}`}
                      className="brand-logo"
                      loading="lazy"
                    />
                  )}
                </div>
                <div className="project-text">
                  <h3 className="project-name">{proj.name}</h3>
                  <p className="project-desc">{proj.desc}</p>
                  <h4 className="project-tech-title">Tecnologias utilizadas:</h4>
                  <ul
                    className="project-tech-list"
                    role="list"
                    aria-label={`Tecnologias usadas em ${proj.name}`}
                  >
                    {proj.techs.map((t, idx) => (
                      <li key={idx} role="listitem">
                        <img
                          src={t.icon}
                          alt={`${t.name} Logo`}
                          className="skill"
                          title={t.name}
                          loading="lazy"
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navegação (flechas + dots juntos) */}
      <div
        className="projects-nav"
        role="navigation"
        aria-label="Navegação do carrossel"
      >
        <button
          className="nav-button left"
          onClick={scrollPrev}
          aria-label="Slide anterior"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <div className="projects-dots">
          {scrollSnaps.map((_, i) => (
            <button
              key={i}
              className={`projects-dot ${i === selectedIndex ? "active" : ""}`}
              onClick={() => scrollTo(i)}
              aria-label={`Ir para slide ${i + 1}`}
              aria-current={i === selectedIndex ? "true" : "false"}
            />
          ))}
        </div>

        <button
          className="nav-button right"
          onClick={scrollNext}
          aria-label="Próximo slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Projects;
