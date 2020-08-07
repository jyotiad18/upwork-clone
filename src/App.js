import React from 'react';
import './App.css';
import Header from './Header';
import LearnInfo from './LearnInfo';
import LeftBar from './LeftBar';
import RightBar from './RightBar';
import Feeds from './Feeds'
import Footer from './Footer';
import Search from "./Search";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__main">     
        <LearnInfo></LearnInfo> 
        <Search></Search>
        <div className="app__maindetail">          
          <LeftBar></LeftBar>                     
            <Feeds></Feeds>           
          <RightBar></RightBar>    
        </div>     
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
