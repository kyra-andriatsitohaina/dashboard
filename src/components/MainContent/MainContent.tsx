import React, { useContext } from 'react';
import { AsideContext } from '../../context/AsideContext';

const MainContent : React.FC = () => {
    const context = useContext(AsideContext);
      if (!context) {
    throw new Error("Header must be used within an AsideContext.Provider");
  }

  const { isActive } = context;
    return (
        <section className={`main-content ${isActive ? "collapse-main-content" : ""}`}>
            
        </section>
    );
};

export default MainContent;