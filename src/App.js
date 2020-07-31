import React from 'react';
import './App.css';
import Header from './Header';
import LearnInfo from './LearnInfo';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__main">     
        <LearnInfo></LearnInfo>  
        <div classsName="app__items"></div>
      </div>
    </div>
  );
}

export default App;
