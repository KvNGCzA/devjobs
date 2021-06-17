import { useState, useEffect } from 'react';
import './index.scss';
import { ReactComponent as HeaderBackground } from '../../assets/images/bg-pattern-header.svg';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { ReactComponent as Sun } from '../../assets/icons/icon-sun.svg';
import { ReactComponent as Moon } from '../../assets/icons/icon-moon.svg';

const position = '0.3em';

const switchStyle = {
  light: {
    left: position,
    right: 'initial',
  },
  dark: {
    right: position,
    left: 'initial',
  },
};

const Header = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.body.classList = localStorage.getItem('theme') || 'light';
  }, [theme]);

  const handleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';

    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  return (
    <header>
      <HeaderBackground className='header-image' />
      <div className='logo-cont'>
        <Logo />
        <div className='slider-cont'>
          <Sun />
          <div className='slider' onClick={handleTheme}>
            <div className='circle' style={switchStyle[theme]}></div>
          </div>
          <Moon />
        </div>
      </div>
    </header>
  );
};

export default Header;
