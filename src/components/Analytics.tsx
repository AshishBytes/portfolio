import { useEffect } from 'react';

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

const Analytics = () => {
  const id = import.meta.env.VITE_GA_ID;

  useEffect(() => {
    if (!id) return;
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(...args: unknown[]) {
      window.dataLayer!.push(args);
    }
    gtag('js', new Date());
    gtag('config', id);
  }, [id]);

  return null;
};

export default Analytics;
