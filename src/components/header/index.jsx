import { useState } from 'react';
import './index.scss';
import { ReactComponent as HeaderBackground } from '../../assets/images/bg-pattern-header.svg';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { ReactComponent as Sun } from '../../assets/icons/icon-sun.svg';
import { ReactComponent as Moon } from '../../assets/icons/icon-moon.svg';

const Header = () => {
  const [sliderPosition, setsliderPosition] = useState({
    left: '0.3em',
    right: 'initial',
  })

  const handleSliderPosition = (e) => {
    const position = '0.3em';

    if (sliderPosition.left === position) {
      setsliderPosition({
        right: position,
        left: 'initial',
      });
    } else {
      setsliderPosition({
        left: position,
        right: 'initial',
      });
    }
  };

  return (
    <header>
      <HeaderBackground className='header-image' />
      <div className='logo-cont'>
        <Logo />
        <div className='slider-cont'>
          <Sun />
          <div className='slider' onClick={handleSliderPosition}>
            <div
              className='circle'
              style={sliderPosition}
            ></div>
          </div>
          <Moon />
        </div>
      </div>
    </header>
  );
};

export default Header;
