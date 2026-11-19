export const WHATSAPP_NUMBER = "5531983234169";
export const EMAIL_ADDRESS = "gupasolutions01@gmail.com";

export const EMAIL_SUBJECT = "Contato via Site | Novas Soluções para Sistemas";
export const DEFAULT_CONTACT_MESSAGE =
  "Olá! Gostaria de conversar com um especialista da GupaSolutions sobre uma necessidade de software da minha empresa.";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  DEFAULT_CONTACT_MESSAGE
)}`;

export const GMAIL_COMPOSE_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
  EMAIL_ADDRESS
)}&su=${encodeURIComponent(EMAIL_SUBJECT)}&body=${encodeURIComponent(
  DEFAULT_CONTACT_MESSAGE
)}`;

export const GMAIL_WEB_URL = `https://accounts.google.com/AccountChooser?service=mail&continue=${encodeURIComponent(
  GMAIL_COMPOSE_URL
)}`;

export const OUTLOOK_WEB_URL = `https://outlook.live.com/mail/0/deeplink/compose?to=${encodeURIComponent(
  EMAIL_ADDRESS
)}&subject=${encodeURIComponent(EMAIL_SUBJECT)}&body=${encodeURIComponent(
  DEFAULT_CONTACT_MESSAGE
)}`;
