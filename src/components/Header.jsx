// Header.jsx
import { useState, useEffect, useRef } from "react";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const hamburgerRef = useRef(null);

  // Fecha o menu se clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <header className="header">
      {/* Logo */}
      <a href="/" className="logo">
        <h1 className="logo-title">GUPASOLUTIONS</h1>
        <p className="logo-subtitle">TECNOLOGIA E INOVAÇÃO</p>
      </a>

      {/* Botão hambúrguer (visível no mobile) */}
      <div
        className="hamburger"
        ref={hamburgerRef}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Menu normal (desktop) */}
      <nav className="nav desktop-nav">
        <ul>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#services">Serviços</a></li>
          <li><a href="#projects">Nossos Projetos</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
      </nav>

      {/* Menu dropdown (mobile) */}
      {menuOpen && (
        <nav className="dropdown-menu" ref={dropdownRef}>
          <ul>
            <li><a href="#about" onClick={() => setMenuOpen(false)}>Sobre</a></li>
            <li><a href="#services" onClick={() => setMenuOpen(false)}>Serviços</a></li>
            <li><a href="#projects" onClick={() => setMenuOpen(false)}>Nossos Projetos</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contato</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
