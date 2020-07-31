import React from 'react';
import './LearnInfo.css';

import StarsIcon from "@material-ui/icons/Stars";
import CloseIcon from "@material-ui/icons/Close";

function LearnInfo() {
	return (
    <div className="learnInfo">
      <StarsIcon className="learnInfo__space"></StarsIcon>
      <h5 className="learnInfo__space">|</h5>
      <h5 className="learnInfo__space">
        Visit your profile to see a new and improved design! Learn more here.
      </h5>
      <CloseIcon className="learnInfo__close"></CloseIcon>
    </div>
  );
}

export default LearnInfo;
