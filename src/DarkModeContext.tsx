import React, { createContext, useState, useEffect } from 'react';

interface DarkModeContextProps {
  isDark: boolean;
  toggle: () => void;
}

const DarkModeContext = createContext<DarkModeContextProps>({
  isDark: false,
  toggle: () => {},
});

export const DarkModeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isDark, setIsDark] = useState(
    () => localStorage.getItem('theme') === 'dark',
  );

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <DarkModeContext.Provider
      value={{ isDark, toggle: () => setIsDark((v) => !v) }}
    >
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeContext;
