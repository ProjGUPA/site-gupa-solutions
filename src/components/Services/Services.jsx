import "./Services.css";

function Services() {
  const services = [
    {
      number: 1,
      title: "Desenvolvimento de Sistemas",
      text: "Criamos novos sistemas personalizados a partir do zero, adaptados às necessidades específicas do seu negócio. Nosso foco está em entregar soluções eficientes, escaláveis e seguras, utilizando as mais recentes tecnologias de desenvolvimento."
    },
    {
      number: 2,
      title: "Manutenção de Sistemas",
      text: "Oferecemos serviços contínuos de manutenção para sistemas já em operação, garantindo que eles permaneçam atualizados, seguros e funcionando de forma otimizada. Lidamos com correções de bugs, atualizações e melhorias de desempenho."
    },
    {
      number: 3,
      title: "Refatoração de Sistemas",
      text: "Refatoramos sistemas antigos para melhorar a eficiência, a legibilidade do código e a escalabilidade. Atualizamos a arquitetura e o design do software sem alterar sua funcionalidade, trazendo-o para padrões modernos."
    },
    {
      number: 4,
      title: "Consultoria de Arquitetura",
      text: "Fornecemos consultoria especializada em arquitetura de software e design de projetos. Ajudamos a definir a estrutura ideal para seu sistema, garantindo que ele seja robusto, escalável e alinhado às melhores práticas do mercado."
    },
    {
      number: 5,
      title: "Gestão Agile",
      text: "Atuamos em projetos ágeis, oferecendo serviços de Scrum Master e Product Owner para garantir que os processos de desenvolvimento sejam eficientes e orientados ao valor. Facilitamos a implementação de metodologias ágeis."
    },
    {
      number: 6,
      title: "Qualidade de Código",
      text: "Realizamos análises detalhadas da qualidade do código, identificando e corrigindo problemas de estrutura, lógica e performance. Nosso objetivo é garantir que o código seja limpo, eficiente e de fácil manutenção."
    },
    {
      number: 7,
      title: "Qualidade de Testes",
      text: "Focamos na garantia de qualidade através de testes rigorosos, avaliando a funcionalidade, usabilidade e desempenho dos sistemas. Inclui a criação e execução de testes automatizados e manuais."
    }
  ];

  return (
    <section 
    className="services"
    id = "services"
    >
      <h2 className="services-title">O que podemos fazer por você?</h2>

      <div className="services-grid">
        {services.map((s, i) => (
          <div className="service-item" key={i}>
            {/* círculo fora do card */}
            <div className="service-number">{s.number}</div>

            {/* card em si, com glow controlado via CSS */}
            <div className="service-card">
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
