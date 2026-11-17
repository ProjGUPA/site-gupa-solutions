import { useState, useEffect, useRef } from "react";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);
  const hamburgerRef = useRef(null);

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

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-inner">
        <a href="/site-gupa-solutions" className="logo">
          <h1 className="logo-title">GUPASOLUTIONS</h1>
          <p className="logo-subtitle">TECNOLOGIA E INOVAÇÃO</p>
        </a>

        <div
          className="hamburger"
          ref={hamburgerRef}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className="nav desktop-nav">
          <ul>
            <li><a href="#services">Serviços</a></li>
            <li><a href="#projects">Nossos Projetos</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </nav>

        {menuOpen && (
          <nav className="dropdown-menu" ref={dropdownRef}>
            <ul>
              <li><a href="#services" onClick={() => setMenuOpen(false)}>Serviços</a></li>
              <li><a href="#projects" onClick={() => setMenuOpen(false)}>Nossos Projetos</a></li>
              <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contato</a></li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
