import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './index.scss';
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
      <div className='header-image' />
      <div className='logo-cont'>
        <Link to='/'>
          <Logo />
        </Link>
        <div className='slider-cont'>
          <Sun />
          <div
            className='slider'
            style={{
              backgroundColor:
                theme === 'dark' ? 'rgba(25, 32, 45, 1)' : 'white',
            }}
            onClick={handleTheme}
          >
            <div className='circle' style={switchStyle[theme]}></div>
          </div>
          <Moon />
        </div>
      </div>
    </header>
  );
};

export default Header;
