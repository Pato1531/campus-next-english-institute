declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

type GtagEventParams = Record<string, string | number | boolean | undefined>;

/**
 * Dispara un evento custom a Google Analytics 4.
 *
 * No hace nada si GA todavía no cargó — falla en silencio, nunca rompe la
 * funcionalidad real del campus (login, progreso, certificado) por un
 * evento de tracking.
 *
 * Nunca pasar acá datos personales del alumno (nombre, email): solo
 * información agregada (curso, lección, nombre de evento).
 */
export function trackEvent(eventName: string, params?: GtagEventParams): void {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('event', eventName, params);
}
