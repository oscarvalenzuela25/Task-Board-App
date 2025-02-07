import { useEffect, useState } from 'react';

const useNavbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme && savedTheme === 'dark') {
      setIsDarkMode(prev => !prev);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const handleThemeSwitch = () => {
    setIsDarkMode(!isDarkMode);
  };

  return {
    isDarkMode,
    handleThemeSwitch,
  };
};

export default useNavbar;
