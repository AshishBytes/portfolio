import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const DarkModeContext = createContext({
  isDark: false,
  toggle: () => {},
});

export const DarkModeProvider = ({ children }) => {
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

DarkModeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DarkModeContext;