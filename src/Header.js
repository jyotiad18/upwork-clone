import React from 'react';
import './Header.css';
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import TelegramIcon from "@material-ui/icons/Telegram";
import Avatar from "@material-ui/core/Avatar";
import SearchIcon from "@material-ui/icons/Search";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function App() {
	return (
    <div className="header">
      <img
        className="header__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Upwork-logo.svg/1200px-Upwork-logo.svg.png"
        alt="UpWork"
      />
      <form className="header__search">
        <SearchIcon fontSize="large" className="header__searchIcon" />
        <ExpandMoreIcon fontSize="large"  className="header__searchIcon" />
			<input type="text" className="header__text" placeholder="Find Jobs"/>
      </form>
      <div className="header__infos">
        <h5 className="header__infosItem">FIND WORK</h5>
        <h5 className="header__infosItem">MY JOB</h5>
        <h5 className="header__infosItem">REPORTS</h5>
        <h5 className="header__infosItem">MESSAGES</h5>
      </div>
      <div className="header__icons">
        <HelpOutlineIcon fontSize="large" className="header__infosItem" />
        <NotificationsNoneIcon fontSize="large" className="header__infosItem" />
        <TelegramIcon fontSize="large" className="header__infosItem" />
        <Avatar
          className="header__infosItem header__infosAvatar"
          alt="Jyoti"
          src="https://miro.medium.com/fit/c/336/336/0*RgM3bN2-fQ-KS2_3"
        />
      </div>
    </div>
  );
}

export default App;