import React, { useContext } from 'react';
import { AsideContext } from '../../context/AsideContext';
import ArrowLeftIcon from '../Icons/ArrowLeftIcon';
import ArrowRightIcon from '../Icons/ArrowRightIcon';
import AdditionIcon from '../Icons/AdditionIcon';
import FavoriteIcon from '../Icons/FavoriteIcon';
import SettingIcon from '../Icons/SettingIcon';
import LanguageIcon from '../Icons/LanguageIcon';
import ThemeIcon from '../Icons/ThemeIcon';
import MgIcon from '../Icons/MgIcon';
import FrIcon from '../Icons/FrIcon';
import UkIcon from '../Icons/UkIcon';

const Header: React.FC = () => {
  const context = useContext(AsideContext);

  if (!context) {
    throw new Error("Header must be used within an AsideContext.Provider");
  }

  const { isActive, setIsActive } = context;

  return (
    <header>
      <div id='header-btn'>
        <button id='close-btn' title='quit'></button>
        <button id='collapse-btn' title='collapse'></button>
        <button id='expand-btn' title='expand'></button>
      </div>
      <div id="header-nav">
        <div className={`logo ${isActive ? "collapse-logo" : ""}`}>
          <h2>ScreenTech</h2>
          <button onClick={()=>setIsActive(!isActive)}>
            {isActive ? <ArrowLeftIcon/> : <ArrowRightIcon/>}
          </button>
        </div>
        <nav className={isActive ? "collapse-nav" : ""}>
          <ul>
            <li>
              <button id='add-btn'>
                  <AdditionIcon/>
                <span>add</span>
              </button>
            </li>
            <li>
              <button>
                <FavoriteIcon/>
                <span>favorite</span>
              </button>
            </li>
          </ul>
          <ul id='settings-list'>
            <li >
              <button>
                <SettingIcon/>
                <span>Language & Theme</span>
              </button>
              <ul className="settings-language-theme">
                <li className='list'>
                  <LanguageIcon/>
                  <ul>
                    <li><button><MgIcon/></button></li>
                    <li><button><FrIcon/></button></li>
                    <li><button><UkIcon/></button></li>
                  </ul>
                </li>
                <li className='list'>
                  <ThemeIcon/>
                  <ul>
                    <li><button className='color'></button></li>
                    <li><button className='color'></button></li>
                    <li><button className='color'></button></li>
                  </ul>
                </li>
                
              </ul>
            </li>
          </ul>
        </nav>
      </div>

    </header>
  );
};

export default Header;
