export const trackWhatsAppClick = (position, service = "gupa_solutions") => {
  window.dataLayer = window.dataLayer || [];

  window.dataLayer.push({
    event: "whatsapp_click",
    whatsapp_position: position,
    whatsapp_service: service,
  });
};
