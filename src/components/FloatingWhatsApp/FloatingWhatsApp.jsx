import { useEffect, useState } from "react";
import "./FloatingWhatsApp.css";
import { WHATSAPP_URL } from "../../constants/contact";

function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const heroEl = document.getElementById("about");
    const footerEl = document.getElementById("contact");

    let isHeroVisible = true;
    let isFooterVisible = false;

    const updateVisibility = () => {
      setIsVisible(!isHeroVisible && !isFooterVisible);
    };

    if (!("IntersectionObserver" in window)) {
      const handleScroll = () => {
        const scrollY = window.scrollY;
        const heroHeight = heroEl ? heroEl.offsetHeight : 600;
        const docHeight = document.documentElement.scrollHeight;
        const windowHeight = window.innerHeight;
        const nearBottom = scrollY + windowHeight >= docHeight - 250;
        setIsVisible(scrollY > heroHeight * 0.7 && !nearBottom);
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      handleScroll();
      return () => window.removeEventListener("scroll", handleScroll);
    }

    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        isHeroVisible = entry.isIntersecting;
        updateVisibility();
      },
      {
        threshold: 0.1,
      }
    );

    const footerObserver = new IntersectionObserver(
      ([entry]) => {
        isFooterVisible = entry.isIntersecting;
        updateVisibility();
      },
      {
        threshold: 0.1,
      }
    );

    if (heroEl) heroObserver.observe(heroEl);
    if (footerEl) footerObserver.observe(footerEl);

    return () => {
      heroObserver.disconnect();
      footerObserver.disconnect();
    };
  }, []);

  return (
    <aside
      className={`floating-whatsapp-container ${isVisible ? "is-visible" : ""}`}
      aria-hidden={!isVisible}
    >
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer noopener"
        className="floating-whatsapp-btn"
        aria-label="Conversar com um especialista no WhatsApp"
        tabIndex={isVisible ? 0 : -1}
      >
        <span className="floating-whatsapp-pulse" aria-hidden="true" />
        <svg
          viewBox="0 0 24 24"
          className="floating-whatsapp-icon"
          aria-hidden="true"
        >
          <path
            d="M20.52 3.48A11.94 11.94 0 0 0 12.06 0C5.49 0 .16 5.33.16 11.9a11.83 11.83 0 0 0 1.55 5.89L0 24l6.38-1.66a11.9 11.9 0 0 0 5.7 1.47h.01c6.57 0 11.9-5.33 11.9-11.9 0-3.18-1.24-6.16-3.47-8.43ZM12.1 21.21h-.01a9.3 9.3 0 0 1-4.74-1.3l-.34-.2-3.78.99 1.01-3.68-.22-.38a9.29 9.29 0 1 1 8.08 4.57Zm5.42-7.01c-.3-.15-1.76-.86-2.03-.96-.27-.1-.46-.14-.66.15-.19.3-.76.95-.93 1.15-.17.2-.34.22-.64.07-.3-.15-1.25-.46-2.38-1.46-.88-.77-1.47-1.71-1.64-2-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.66-1.59-.9-2.18-.23-.56-.47-.48-.66-.49h-.57c-.2 0-.53.08-.81.38-.27.3-1.06 1.04-1.06 2.54s1.09 2.95 1.24 3.16c.15.2 2.15 3.3 5.2 4.62.73.32 1.31.51 1.76.65.74.23 1.41.2 1.94.12.59-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.18-1.42-.07-.12-.27-.2-.58-.35Z"
            fill="currentColor"
          />
        </svg>
        <span className="floating-whatsapp-tooltip" aria-hidden="true">
          Fale com um especialista
        </span>
      </a>
    </aside>
  );
}

export default FloatingWhatsApp;
