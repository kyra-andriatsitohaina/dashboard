import { useContext, useState } from 'react';
import MenuItem from './MenuItem';
import DashIcon from '../Icons/DashIcon';
import UserIcon from '../Icons/UserIcon';
import SettingIcon from '../Icons/SettingIcon';
import { AsideContext } from '../../context/AsideContext';
import ProfileIcon from '../Icons/ProfileIcon';
import SecurityIcon from '../Icons/SecurityIcon';
import PreferencesIcon from '../Icons/PreferencesIcon';

const Sidebar = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const context = useContext(AsideContext);

  if (!context) {
    throw new Error("Header must be used within an AsideContext.Provider");
  }

  const { isActive } = context;


  const handleToggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };


  return (
    <aside className={`sidebar ${isActive ? "collapse-aside" : ""}`}>
      <MenuItem
        svg = {<DashIcon/>}
        title="Dashboard"
        isOpen={openIndex === 0}
        onToggle={() => handleToggle(0)}
      >
        <ul>
          <li>
            <svg viewBox="0 0 50 50" enable-background="new 0 0 50 50" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#545252" d="M9.037,40.763h4.286c0.552,0,1-0.447,1-1v-7.314c0-0.553-0.448-1-1-1H9.037c-0.552,0-1,0.447-1,1v7.314 C8.037,40.315,8.485,40.763,9.037,40.763z M10.037,33.448h2.286v5.314h-2.286V33.448z"></path> <path fill="#545252" d="M21.894,40.763c0.552,0,1-0.447,1-1v-20.64c0-0.553-0.448-1-1-1h-4.286c-0.552,0-1,0.447-1,1v20.64 c0,0.553,0.448,1,1,1H21.894z M18.608,20.123h2.286v18.64h-2.286V20.123z"></path> <path fill="#545252" d="M30.465,40.763c0.552,0,1-0.447,1-1V25.96c0-0.553-0.448-1-1-1H26.18c-0.552,0-1,0.447-1,1v13.803 c0,0.553,0.448,1,1,1H30.465z M27.18,26.96h2.286v11.803H27.18V26.96z"></path> <path fill="#545252" d="M33.751,9.763v30c0,0.553,0.448,1,1,1h4.286c0.552,0,1-0.447,1-1v-30c0-0.553-0.448-1-1-1h-4.286 C34.199,8.763,33.751,9.21,33.751,9.763z M35.751,10.763h2.286v28h-2.286V10.763z"></path> </g></svg>
            <span>Statistics</span>
          </li>
          <li>
            <svg viewBox="0 0 24 24"  data-name="24x24/On Light/Recent" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect id="view-box" width="24" height="24" fill="none"></rect> <path id="Shape" d="M9.682,18.75a.75.75,0,0,1,.75-.75,8.25,8.25,0,1,0-6.189-2.795V12.568a.75.75,0,0,1,1.5,0v4.243a.75.75,0,0,1-.751.75H.75a.75.75,0,0,1,0-1.5H3a9.75,9.75,0,1,1,7.433,3.44A.75.75,0,0,1,9.682,18.75Zm2.875-4.814L9.9,11.281a.754.754,0,0,1-.22-.531V5.55a.75.75,0,1,1,1.5,0v4.889l2.436,2.436a.75.75,0,1,1-1.061,1.06Z" transform="translate(1.568 2.25)" fill="#545252"></path> </g></svg>
            <span>History</span>
          </li>
          <li>
            <svg viewBox="0 0 24 24" fill="none" ><g  stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15 19.25C15 20.0456 14.6839 20.8087 14.1213 21.3713C13.5587 21.9339 12.7956 22.25 12 22.25C11.2044 22.25 10.4413 21.9339 9.87869 21.3713C9.31608 20.8087 9 20.0456 9 19.25" stroke="#545252" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M5.58096 18.25C5.09151 18.1461 4.65878 17.8626 4.36813 17.4553C4.07748 17.048 3.95005 16.5466 4.01098 16.05L5.01098 7.93998C5.2663 6.27263 6.11508 4.75352 7.40121 3.66215C8.68734 2.57077 10.3243 1.98054 12.011 1.99998V1.99998C13.6977 1.98054 15.3346 2.57077 16.6207 3.66215C17.9069 4.75352 18.7557 6.27263 19.011 7.93998L20.011 16.05C20.0723 16.5452 19.9462 17.0454 19.6576 17.4525C19.369 17.8595 18.9386 18.144 18.451 18.25C14.2186 19.2445 9.81332 19.2445 5.58096 18.25V18.25Z" stroke="#545252" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            <span>Notifications</span>
          </li>
        </ul>
      </MenuItem>
      <MenuItem
        svg = {<UserIcon/>}
        title="Users"
        isOpen={openIndex === 1}
        onToggle={() => handleToggle(1)}
      >
        <ul>
          <li>
            <svg viewBox="0 0 24 24" fill="none" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 6L21 6.00078M8 12L21 12.0008M8 18L21 18.0007M3 6.5H4V5.5H3V6.5ZM3 12.5H4V11.5H3V12.5ZM3 18.5H4V17.5H3V18.5Z" stroke="#545252" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            <span>List</span>
          </li>
          <li>Ajouter</li>
        </ul>
      </MenuItem>
      <MenuItem
        svg = {<SettingIcon/>}
        title="Account"
        isOpen={openIndex === 2}
        onToggle={() => handleToggle(2)}
      >
        <ul>
          <li>
            <ProfileIcon/>
            <span>Profile</span>
          </li>
          <li>
            <SecurityIcon/>
            <span>Security</span>
          </li>
          <li>
            <PreferencesIcon/>
            <span>Preferences</span>
          </li>
        </ul>
      </MenuItem>
    </aside>
  );
};

export default Sidebar;
