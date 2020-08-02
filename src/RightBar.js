import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import SearchIcon from '@material-ui/icons/Search';
import EditIcon from '@material-ui/icons/Edit';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import LinearProgress from '@material-ui/core/LinearProgress';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import VisibilityIcon from '@material-ui/icons/Visibility';
import TimerIcon from '@material-ui/icons/Timer';
import "./RightBar.css";

function RightBar() {
	const [status, setStatus] = useState("Visibility");
	return (
		<div className="rightBar">
			<div className="rightBar__myprofile">
				<Avatar
					className=""
					alt="Jyoti"
					src="https://miro.medium.com/fit/c/336/336/0*RgM3bN2-fQ-KS2_3"
				/>
				<h5>My Profile</h5>
			</div>
			<div className="rightBar__visibilty">
				<h5>{status}</h5>
				<div className="rightBar__visibiltyDetail">
					<SearchIcon fontSize= "small" className="rightBar__searchIcon"></SearchIcon>
					<p className="rightBar__text">Private</p>
					<EditIcon fontSize="small" className="rightBar__editIcon"></EditIcon>
				</div>
			</div>

			<div className="rightBar__visibilty">
				<h5>Availability</h5>
				<div className="rightBar__visibiltyDetail">
					<QueryBuilderIcon fontSize="small" className="rightBar__searchIcon"></QueryBuilderIcon>
					<p className="rightBar__text">More than 30 hrs/week </p>
					<EditIcon fontSize="small" className="rightBar__editIcon"></EditIcon>
				</div>
			</div>

			<div className="rightBar__progressbar">	
				<LinearProgress variant="determinate" value={90} />					
			</div>

			<div className="rightBar__visibilty">				
				<div className="rightBar__visibiltyDetailGreen">		
					<AddCircleIcon fontSize="small" className="rightBar__searchIcon"></AddCircleIcon>
					<p className="rightBar__text">Add a link social account +10% </p>					
				</div>
			</div>

			<div className="rightBar__visibilty">
				<div className="rightBar__visibiltyDetailGreen">
					<VisibilityIcon fontSize="small" className="rightBar__searchIcon"></VisibilityIcon>
					<p className="rightBar__text">View Profile </p>
				</div>
			</div>

			<div className="rightBar__visibilty">
				<h5>Proposals</h5>
				<div className="rightBar__visibiltyDetailGreen">					
					<p className="rightBar__text">{1} submitted proposed </p>					
				</div>
				<div className="rightBar__visibiltyDetailGreen">
					<p className="rightBar__text">{60} avaiable connection </p>
				</div>
			</div>

			<div className="rightBar__visibilty">
				<div className="rightBar__visibiltyDetailGreen">
					<TimerIcon fontSize="small" className="rightBar__searchIcon"></TimerIcon>
					<p className="rightBar__text">Track time with the desktop app </p>
				</div>
			</div>
			
		</div>
	);
}

export default RightBar;