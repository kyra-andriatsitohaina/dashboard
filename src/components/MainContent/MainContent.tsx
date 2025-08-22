import React, { useContext } from 'react';
import { AsideContext } from '../../context/AsideContext';
import Posts from './Posts';

const MainContent : React.FC = () => {
    const context = useContext(AsideContext);
      if (!context) {
    throw new Error("Header must be used within an AsideContext.Provider");
  }

  const { isActive } = context;
    return (
        <section className={`main-content ${isActive ? "collapse-main-content" : ""}`}>
            <form id='search-form'>
                <label htmlFor="search"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="#545252" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></label>
                <input type="search" placeholder='Search your posts ...' id="search"/>
            </form>
            <Posts/>
            
        </section>
    );
};

export default MainContent;