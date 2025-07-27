import { useEffect } from 'react';

const GA_ID = import.meta.env.VITE_GA_ID;

const Analytics = () => {
  useEffect(() => {
    if (!GA_ID) return;
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    script.async = true;
    document.head.appendChild(script);

    const inline = document.createElement('script');
    inline.innerHTML = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`;
    document.head.appendChild(inline);
  }, []);

  return null;
};

export default Analytics;
