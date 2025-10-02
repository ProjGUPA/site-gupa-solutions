import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer" aria-labelledby="footer-heading" id="contact">
      <div className="footer-inner">
        {/* Título */}
        <h2 id="footer-heading" className="footer-title">
          Nos envie uma mensagem!
        </h2>

        {/* Botões */}
        <div className="footer-cta" role="group" aria-label="Canais de contato">
          <a
            href="mailto:contato@gupasolutions.com"
            className="footer-btn email"
            aria-label="Enviar email para Gupa Solutions"
            title="Enviar email"
          >
            <svg viewBox="0 0 24 24" className="cta-icon" aria-hidden="true">
              <path
                d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z"
                fill="currentColor"
              />
            </svg>
          </a>

          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noreferrer noopener"
            className="footer-btn whatsapp"
            aria-label="Abrir conversa no WhatsApp"
            title="WhatsApp"
          >
            <svg viewBox="0 0 24 24" className="cta-icon" aria-hidden="true">
              <path
                d="M20.52 3.48A11.94 11.94 0 0 0 12.06 0C5.49 0 .16 5.33.16 11.9a11.83 11.83 0 0 0 1.55 5.89L0 24l6.38-1.66a11.9 11.9 0 0 0 5.7 1.47h.01c6.57 0 11.9-5.33 11.9-11.9 0-3.18-1.24-6.16-3.47-8.43ZM12.1 21.21h-.01a9.3 9.3 0 0 1-4.74-1.3l-.34-.2-3.78.99 1.01-3.68-.22-.38a9.29 9.29 0 1 1 8.08 4.57Zm5.42-7.01c-.3-.15-1.76-.86-2.03-.96-.27-.1-.46-.14-.66.15-.19.3-.76.95-.93 1.15-.17.2-.34.22-.64.07-.3-.15-1.25-.46-2.38-1.46-.88-.77-1.47-1.71-1.64-2-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.66-1.59-.9-2.18-.23-.56-.47-.48-.66-.49h-.57c-.2 0-.53.08-.81.38-.27.3-1.06 1.04-1.06 2.54s1.09 2.95 1.24 3.16c.15.2 2.15 3.3 5.2 4.62.73.32 1.31.51 1.76.65.74.23 1.41.2 1.94.12.59-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.18-1.42-.07-.12-.27-.2-.58-.35Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>

        {/* Copyright */}
        <p className="footer-copy">© 2025 GUPASOLUTIONS.</p>
      </div>
    </footer>
  );
};

export default Footer;
