import type { MouseEvent } from "react";

export const WHATSAPP_NUMBER = "261349174020";

export const buildWhatsAppUrl = (message?: string) => {
  const baseUrl = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${baseUrl}?text=${encodeURIComponent(message)}` : baseUrl;
};

const buildWhatsAppAppUrl = (message?: string) => {
  const baseUrl = `whatsapp://send?phone=${WHATSAPP_NUMBER}`;
  return message ? `${baseUrl}&text=${encodeURIComponent(message)}` : baseUrl;
};

export const handleWhatsAppClick = (
  event: MouseEvent<HTMLAnchorElement>,
  message?: string,
) => {
  if (typeof window === "undefined") return;

  event.preventDefault();

  const appUrl = buildWhatsAppAppUrl(message);
  const webUrl = buildWhatsAppUrl(message);
  const fallback = window.setTimeout(() => {
    if (document.visibilityState === "visible") {
      window.location.href = webUrl;
    }
  }, 900);

  const cancelFallback = () => {
    if (document.visibilityState === "hidden") {
      window.clearTimeout(fallback);
    }
  };

  document.addEventListener("visibilitychange", cancelFallback, { once: true });
  window.location.href = appUrl;
};