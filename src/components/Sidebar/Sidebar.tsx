import { useState } from 'react';
import MenuItem from './MenuItem';
import DashIcon from './DashIcon';

const Sidebar = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <aside className="sidebar">
      <MenuItem
        svg = {<DashIcon/>}
        title="Dashboard"
        isOpen={openIndex === 0}
        onToggle={() => handleToggle(0)}
      >
        <ul>
          <li>
            <svg viewBox="0 0 50 50" enable-background="new 0 0 50 50" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#545252" d="M9.037,40.763h4.286c0.552,0,1-0.447,1-1v-7.314c0-0.553-0.448-1-1-1H9.037c-0.552,0-1,0.447-1,1v7.314 C8.037,40.315,8.485,40.763,9.037,40.763z M10.037,33.448h2.286v5.314h-2.286V33.448z"></path> <path fill="#545252" d="M21.894,40.763c0.552,0,1-0.447,1-1v-20.64c0-0.553-0.448-1-1-1h-4.286c-0.552,0-1,0.447-1,1v20.64 c0,0.553,0.448,1,1,1H21.894z M18.608,20.123h2.286v18.64h-2.286V20.123z"></path> <path fill="#545252" d="M30.465,40.763c0.552,0,1-0.447,1-1V25.96c0-0.553-0.448-1-1-1H26.18c-0.552,0-1,0.447-1,1v13.803 c0,0.553,0.448,1,1,1H30.465z M27.18,26.96h2.286v11.803H27.18V26.96z"></path> <path fill="#545252" d="M33.751,9.763v30c0,0.553,0.448,1,1,1h4.286c0.552,0,1-0.447,1-1v-30c0-0.553-0.448-1-1-1h-4.286 C34.199,8.763,33.751,9.21,33.751,9.763z M35.751,10.763h2.286v28h-2.286V10.763z"></path> </g></svg>
            <span>Statistique</span>
          </li>
          <li>blablabla</li>
        </ul>
      </MenuItem>

      <MenuItem
        svg = {<DashIcon/>}
        title="Utilisateurs"
        isOpen={openIndex === 1}
        onToggle={() => handleToggle(1)}
      >
        <ul>
          <li>Liste</li>
          <li>Ajouter</li>
        </ul>
      </MenuItem>
      <MenuItem
        svg = {<DashIcon/>}
        title="Paramètres"
        isOpen={openIndex === 2}
        onToggle={() => handleToggle(2)}
      >
        <ul>
          <li>Profil</li>
          <li>Sécurité</li>
        </ul>
      </MenuItem>
    </aside>
  );
};

export default Sidebar;
