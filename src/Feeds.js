import React, { useState} from 'react';
import './Feeds.css';
import IconButton from "@material-ui/core/IconButton";
import MoreHorizRoundedIcon from '@material-ui/icons/MoreHorizRounded';
import Button from '@material-ui/core/Button';
import ThumbDownRoundedIcon from '@material-ui/icons/ThumbDownRounded';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import StarIcon from '@material-ui/icons/Star';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { initData } from './init';

function Feeds() {	
	const [feeds, setFeeds] = useState(initData);

	return (
		<div className="feeds">
			<section className="feeds__sectiontop">
				<h1 className="feeds__myFeed">My Feed</h1>
				<IconButton className="feeds__iconButton">
					<MoreHorizRoundedIcon						
					></MoreHorizRoundedIcon>
				</IconButton>				
			</section>
			{
				feeds?.map((feed) => (
					<section className="feeds__detail">	
						<div className="feeds__header">
							<h1 className="feeds__headerTitle">{feed.title}</h1>
							<div className="feeds__detailIcons">
								<IconButton className="feeds__iconButton">
									<ThumbDownRoundedIcon
									></ThumbDownRoundedIcon>
								</IconButton>
								<IconButton className="feeds__iconButton">
									<FavoriteBorderRoundedIcon
									></FavoriteBorderRoundedIcon>
								</IconButton>
							</div>
						</div>	
						<div className="feeds__timeprice">
							<div className="feeds__hourly">Hourly: {feed.hourly}</div>
							<div className="feeds__duration">
								<h6>{' - '}</h6>
								<h6>{feed.level}</h6>
								<h6>{' - Est. Time: '}</h6>								
								<h6>{' Less than '}</h6>
								<h6>{feed.Duration}</h6>
								<h6>{','}</h6>
								<h6>{feed.workhour}</h6>
								<h6>{' - Posted'}</h6>
								<h6>{feed.posted}</h6>			
							</div>	
						</div>	
						<div className="feeds__description">
							{feed.description}
						</div>
						<div className="feeds__languages">
							{feed.language?.map(l => (
								<div className="feeds__language">{l}</div>
							))
							}
						</div>
						<div className="feeds__timeprice">
							{'Hourly: '}<div className="feeds__hourly">{feed.proposed}</div> 
						</div>
						<div className="feeds__verified">
							<div className="feeds__rates">
								<VerifiedUserIcon className="feeds__verifiedIcon"></VerifiedUserIcon>
								<h6>Payment Verified</h6>
								<div className="feeds__stars">
									<StarIcon className="feeds__star" fontSize="small"></StarIcon>
									<StarIcon className="feeds__star" fontSize="small"></StarIcon>
									<StarIcon className="feeds__star" fontSize="small"></StarIcon>
									<StarIcon className="feeds__star" fontSize="small"></StarIcon>
									<StarIcon className="feeds__star" fontSize="small"></StarIcon>
								</div>
							</div>
							<div className="feeds__place">
								<LocationOnIcon></LocationOnIcon>
								<h6>{feed.place}</h6>
							</div>
						</div>
					</section>
				))
			}
			<section className="feeds__sectionbottom">
				<Button variant="contained" className="feeds__button" disableRipple>
					Load More Jobs
				</Button>
			</section>
		</div>
	)
}

export default Feeds;
