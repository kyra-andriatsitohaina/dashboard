import React, { useState } from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import { AsideContext } from './context/AsideContext';
import MainContent from './components/MainContent/MainContent';

const App: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <main>
      <AsideContext.Provider value={{isActive, setIsActive}}>
        <Header/>
        <div id='container'>
          <Sidebar/>
          <MainContent/> 
        </div>
      </AsideContext.Provider>
    </main>
  );
};

export default App;
