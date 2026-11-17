import React, { useEffect, useRef, useState } from "react";
import "./Footer.css";

const EMAIL_ADDRESS = "gupasolutions01@gmail.com";
const WHATSAPP_NUMBER = "5531983234169";

const EMAIL_SUBJECT = "Contato via Site | Novas Soluções para Sistemas";
const DEFAULT_MESSAGE =
  "Olá! Vim pelo site e gostaria de conversar sobre novas soluções para nosso sistema.";

const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
  EMAIL_ADDRESS
)}&su=${encodeURIComponent(EMAIL_SUBJECT)}&body=${encodeURIComponent(
  DEFAULT_MESSAGE
)}`;

const gmailWebUrl = `https://accounts.google.com/AccountChooser?service=mail&continue=${encodeURIComponent(
  gmailComposeUrl
)}`;

const outlookWebUrl = `https://outlook.live.com/mail/0/deeplink/compose?to=${encodeURIComponent(
  EMAIL_ADDRESS
)}&subject=${encodeURIComponent(EMAIL_SUBJECT)}&body=${encodeURIComponent(
  DEFAULT_MESSAGE
)}`;

const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  DEFAULT_MESSAGE
)}`;

const Footer = () => {
  const [emailExpanded, setEmailExpanded] = useState(false);
  const emailBtnRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (emailBtnRef.current && !emailBtnRef.current.contains(e.target)) {
        setEmailExpanded(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setEmailExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <footer
      className="site-footer"
      aria-labelledby="footer-heading"
      id="contact"
    >
      <div className="footer-inner">
        <h2 id="footer-heading" className="footer-title">
          Nos envie uma mensagem!
        </h2>

        <div
          className="footer-cta"
          role="group"
          aria-label="Canais de contato"
        >
          <div
            ref={emailBtnRef}
            className={`footer-btn email-morph ${
              emailExpanded ? "is-expanded" : ""
            }`}
            role="button"
            tabIndex={emailExpanded ? -1 : 0}
            aria-expanded={emailExpanded}
            aria-label="Enviar email para Gupa Solutions"
            title={emailExpanded ? "" : "Enviar email"}
            onClick={() => {
              if (!emailExpanded) setEmailExpanded(true);
            }}
            onKeyDown={(e) => {
              if (!emailExpanded && (e.key === "Enter" || e.key === " ")) {
                e.preventDefault();
                setEmailExpanded(true);
              }
            }}
          >
            <span className="email-envelope-layer" aria-hidden={emailExpanded}>
              <svg viewBox="0 0 24 24" className="cta-icon" aria-hidden="true">
                <path
                  d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z"
                  fill="currentColor"
                />
              </svg>
            </span>

            <div
              className="email-providers-layer"
              aria-hidden={!emailExpanded}
            >
              <a
                href={gmailWebUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="provider-half gmail"
                aria-label="Enviar pelo Gmail"
                title="Abrir no Gmail"
                tabIndex={emailExpanded ? 0 : -1}
                onClick={(e) => {
                  e.stopPropagation();
                  setEmailExpanded(false);
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="provider-icon"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"
                  />
                </svg>
              </a>

              <span className="provider-divider" aria-hidden="true" />

              <a
                href={outlookWebUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="provider-half outlook"
                aria-label="Enviar pelo Outlook"
                title="Abrir no Outlook"
                tabIndex={emailExpanded ? 0 : -1}
                onClick={(e) => {
                  e.stopPropagation();
                  setEmailExpanded(false);
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="provider-icon"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M14 2v20L1 19.8V4.2L14 2zm1.5 3.5H22A1.5 1.5 0 0 1 23.5 7v10a1.5 1.5 0 0 1-1.5 1.5h-6.5v-2h6V10l-6 3.7V11.5l6-3.7V7.5h-6v-2zM7.8 8.2C5.6 8.2 4 9.9 4 12s1.6 3.8 3.8 3.8 3.8-1.7 3.8-3.8-1.6-3.8-3.8-3.8zm0 2.1c1 0 1.7.8 1.7 1.7s-.7 1.7-1.7 1.7-1.7-.8-1.7-1.7.7-1.7 1.7-1.7z"
                  />
                </svg>
              </a>
            </div>
          </div>

          <a
            href={whatsappUrl}
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

        <p className="footer-copy">© 2027 GUPASOLUTIONS.</p>
      </div>
    </footer>
  );
};

export default Footer;
