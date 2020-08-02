import React from 'react';
import './App.css';
import Header from './Header';
import LearnInfo from './LearnInfo';
import Search from './Search';
import LeftBar from './LeftBar';
import RightBar from './RightBar';
import Feeds from './Feeds'

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__main">     
        <LearnInfo></LearnInfo> 
        <div className="app__maindetail">
          <LeftBar></LeftBar> 
          <Feeds></Feeds> 
          <RightBar></RightBar>    
        </div>
      </div>
    </div>
  );
}

export default App;
