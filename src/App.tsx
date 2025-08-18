import React from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

const App: React.FC = () => {
  return (
    <main>
      <Header/>
      <div id='container'>
        <Sidebar/>

      </div>
    </main>
  );
};

export default App;
