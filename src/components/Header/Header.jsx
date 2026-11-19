import { useState, useEffect, useRef } from "react";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("gupa-theme");
      if (saved) return saved === "dark";
    }
    return false;
  });
  const dropdownRef = useRef(null);
  const hamburgerRef = useRef(null);

  useEffect(() => {
    const theme = isDark ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("gupa-theme", theme);
    } catch {
      // Ignora falhas de escrita no localStorage
    }
  }, [isDark]);

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
        <a href="/" className="logo">
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
            <li className="theme-toggle-item">
              <button
                type="button"
                className={`theme-toggle ${isDark ? "is-dark" : "is-light"}`}
                onClick={() => setIsDark(!isDark)}
                aria-label={isDark ? "Mudar para modo claro" : "Mudar para modo escuro"}
                title={isDark ? "Modo Escuro" : "Modo Claro"}
              >
                <div className="theme-toggle-track">
                  <div className="theme-toggle-icon moon-icon">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                      <path d="M9.5 4.5A7 7 0 0 0 16 11.5a6.9 6.9 0 0 0 2-.3A7.5 7.5 0 1 1 9.5 4.5z" />
                      <path d="M11 1.5l.4 1 1 .4-1 .4-.4 1-.4-1-1-.4 1-.4z" />
                      <path d="M18.5 7.5l.5 1.2 1.2.5-1.2.5-.5 1.2-.5-1.2-1.2-.5 1.2-.5z" />
                      <path d="M11 20l.4.9.9.4-.9.4-.4.9-.4-.9-.9-.4.9-.4z" />
                      <path d="M4 11.5l.3.7.7.3-.7.3-.3.7-.3-.7-.7-.3.7-.3z" />
                    </svg>
                  </div>
                  <div className="theme-toggle-icon sun-icon">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="4.2" />
                      <path d="M12 2v2.2M12 19.8V22M4.93 4.93l1.56 1.56M17.51 17.51l1.56 1.56M2 12h2.2M19.8 12H22M4.93 19.07l1.56-1.56M17.51 6.49l1.56-1.56" />
                    </svg>
                  </div>
                  <span className="theme-toggle-thumb" />
                </div>
              </button>
            </li>
          </ul>
        </nav>

        {menuOpen && (
          <nav className="dropdown-menu" ref={dropdownRef}>
            <ul>
              <li><a href="#services" onClick={() => setMenuOpen(false)}>Serviços</a></li>
              <li><a href="#projects" onClick={() => setMenuOpen(false)}>Nossos Projetos</a></li>
              <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contato</a></li>
              <li className="theme-toggle-dropdown-item">
                <button
                  type="button"
                  className={`theme-toggle ${isDark ? "is-dark" : "is-light"}`}
                  onClick={() => setIsDark(!isDark)}
                  aria-label={isDark ? "Mudar para modo claro" : "Mudar para modo escuro"}
                >
                  <div className="theme-toggle-track">
                    <div className="theme-toggle-icon moon-icon">
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                        <path d="M9.5 4.5A7 7 0 0 0 16 11.5a6.9 6.9 0 0 0 2-.3A7.5 7.5 0 1 1 9.5 4.5z" />
                        <path d="M11 1.5l.4 1 1 .4-1 .4-.4 1-.4-1-1-.4 1-.4z" />
                        <path d="M18.5 7.5l.5 1.2 1.2.5-1.2.5-.5 1.2-.5-1.2-1.2-.5 1.2-.5z" />
                        <path d="M11 20l.4.9.9.4-.9.4-.4.9-.4-.9-.9-.4.9-.4z" />
                        <path d="M4 11.5l.3.7.7.3-.7.3-.3.7-.3-.7-.7-.3.7-.3z" />
                      </svg>
                    </div>
                    <div className="theme-toggle-icon sun-icon">
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="4.2" />
                        <path d="M12 2v2.2M12 19.8V22M4.93 4.93l1.56 1.56M17.51 17.51l1.56 1.56M2 12h2.2M19.8 12H22M4.93 19.07l1.56-1.56M17.51 6.49l1.56-1.56" />
                      </svg>
                    </div>
                    <span className="theme-toggle-thumb" />
                  </div>
                </button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
