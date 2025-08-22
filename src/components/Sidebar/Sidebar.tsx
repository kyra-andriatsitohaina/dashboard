import { useContext, useState } from 'react';
import MenuItem from './MenuItem';
import DashIcon from '../Icons/DashIcon';
import UserIcon from '../Icons/UserIcon';
import SettingIcon from '../Icons/SettingIcon';
import { AsideContext } from '../../context/AsideContext';
import ProfileIcon from '../Icons/ProfileIcon';
import SecurityIcon from '../Icons/SecurityIcon';
import PreferencesIcon from '../Icons/PreferencesIcon';
import PostsIcon from '../Icons/PostsIcon';
import AllPostIcon from '../Icons/AllPostIcon';
import WarningIcon from '../Icons/WarningIcon';

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
          <li>
            <svg fill="#545252" viewBox="0 0 16 16" id="request-16px" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="Path_49" data-name="Path 49" d="M30.5,16a.489.489,0,0,1-.191-.038A.5.5,0,0,1,30,15.5V13h-.5A2.5,2.5,0,0,1,27,10.5v-8A2.5,2.5,0,0,1,29.5,0h11A2.5,2.5,0,0,1,43,2.5v8A2.5,2.5,0,0,1,40.5,13H33.707l-2.853,2.854A.5.5,0,0,1,30.5,16Zm-1-15A1.5,1.5,0,0,0,28,2.5v8A1.5,1.5,0,0,0,29.5,12h1a.5.5,0,0,1,.5.5v1.793l2.146-2.147A.5.5,0,0,1,33.5,12h7A1.5,1.5,0,0,0,42,10.5v-8A1.5,1.5,0,0,0,40.5,1ZM36,9a1,1,0,1,0-1,1A1,1,0,0,0,36,9Zm1-4a2,2,0,0,0-4,0,.5.5,0,0,0,1,0,1,1,0,1,1,1,1,.5.5,0,0,0,0,1A2,2,0,0,0,37,5Z" transform="translate(-27)"></path> </g></svg>
            <span>Request</span>
          </li>
          <li>
            <svg fill="#545252" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title></title><path d="M48,0A48,48,0,1,0,96,48,48.0512,48.0512,0,0,0,48,0Zm0,12a35.71,35.71,0,0,1,20.7993,6.7214L18.717,68.7935A35.8886,35.8886,0,0,1,48,12Zm0,72a35.71,35.71,0,0,1-20.7993-6.7214L77.283,27.2065A35.8886,35.8886,0,0,1,48,84Z"></path></g></svg>
            <span>Banned / Inactive</span>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" fill="#545252" viewBox="0 0 36 36"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><rect x="6.48" y="18" width="5.76" height="11.52" rx="1" ry="1"></rect><rect x="15.12" y="6.48" width="5.76" height="23.04" rx="1" ry="1"></rect><rect x="23.76" y="14.16" width="5.76" height="15.36" rx="1" ry="1"></rect></g></svg>
            <span>Reports</span>
          </li>
          <li>
            <svg fill="#464455" viewBox="0 0 52 52" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M38.3,27.2A11.4,11.4,0,1,0,49.7,38.6,11.46,11.46,0,0,0,38.3,27.2Zm2,12.4a2.39,2.39,0,0,1-.9-.2l-4.3,4.3a1.39,1.39,0,0,1-.9.4,1,1,0,0,1-.9-.4,1.39,1.39,0,0,1,0-1.9l4.3-4.3a2.92,2.92,0,0,1-.2-.9,3.47,3.47,0,0,1,3.4-3.8,2.39,2.39,0,0,1,.9.2c.2,0,.2.2.1.3l-2,1.9a.28.28,0,0,0,0,.5L41.1,37a.38.38,0,0,0,.6,0l1.9-1.9c.1-.1.4-.1.4.1a3.71,3.71,0,0,1,.2.9A3.57,3.57,0,0,1,40.3,39.6Z"></path> <circle cx="21.7" cy="14.9" r="12.9"></circle> <path d="M25.2,49.8c2.2,0,1-1.5,1-1.5h0a15.44,15.44,0,0,1-3.4-9.7,15,15,0,0,1,1.4-6.4.77.77,0,0,1,.2-.3c.7-1.4-.7-1.5-.7-1.5h0a12.1,12.1,0,0,0-1.9-.1A19.69,19.69,0,0,0,2.4,47.1c0,1,.3,2.8,3.4,2.8H24.9C25.1,49.8,25.1,49.8,25.2,49.8Z"></path> </g></svg>
            <span>Roles & Permissions</span>
          </li>
          <li>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11.8462 20C10.1892 20 8.5748 19.4652 7.2343 18.4721C5.8938 17.4791 4.89604 16.0789 4.38402 14.4721C3.87199 12.8654 3.87199 11.1346 4.38402 9.52786C4.89604 7.92112 5.8938 6.52089 7.2343 5.52786C8.5748 4.53484 10.1892 4 11.8462 4C13.5031 4 15.1175 4.53484 16.458 5.52787C17.7985 6.52089 18.7963 7.92112 19.3083 9.52787C19.8203 11.1346 19.8203 12.8654 19.3083 14.4721M18.1667 12.8889L19.2564 14.6667L21 13.3333M13.5897 9.33333C13.5897 10.3152 12.8091 11.1111 11.8462 11.1111C10.8832 11.1111 10.1026 10.3152 10.1026 9.33333C10.1026 8.35149 10.8832 7.55556 11.8462 7.55556C12.8091 7.55556 13.5897 8.35149 13.5897 9.33333ZM10.2872 12.8889H13.4051C13.6856 12.8889 13.8258 12.8889 13.9512 12.9094C14.3853 12.9803 14.7607 13.2294 14.971 13.5862C15.0317 13.6893 15.0761 13.8118 15.1648 14.0568C15.2713 14.3512 15.3246 14.4984 15.3318 14.6171C15.3572 15.0359 15.0612 15.4141 14.6217 15.5243C14.4971 15.5556 14.3287 15.5556 13.9917 15.5556H9.70063C9.36366 15.5556 9.19517 15.5556 9.0706 15.5243C8.63108 15.4141 8.33507 15.0359 8.36049 14.6171C8.3677 14.4984 8.42098 14.3512 8.52754 14.0568C8.61622 13.8118 8.66056 13.6893 8.72133 13.5862C8.93163 13.2294 9.307 12.9803 9.74109 12.9094C9.86652 12.8889 10.0067 12.8889 10.2872 12.8889Z" stroke="#464455" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            <span>Activity Log</span>
          </li>
        </ul>
      </MenuItem>
      <MenuItem
        svg = {<PostsIcon/>}
        title="Posts"
        isOpen={openIndex === 2}
        onToggle={() => handleToggle(2)}
      >
        <ul>
          <li>
            <AllPostIcon/>
            <span>All Posts</span>
          </li>
          <li>
            <WarningIcon/>
            <span>Reported Content</span>
          </li>
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
