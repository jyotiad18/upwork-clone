import React from 'react';
import "./Footer.css"
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Footer() {
	return (
		<div className="footer">
			<div className="footer__menus">
				<div className="footer__menu1">
					<div className="footer__menuTitle">About Us</div>
					<div className="footer__menuTitle">Feedback</div>
					<div className="footer__menuTitle">Community</div>				
				</div>
				<div className="footer__menu2">
					<div className="footer__menuTitle">Trust, Safety & Security</div>
					<div className="footer__menuTitle">Help & Support</div>
					<div className="footer__menuTitle">Upwork Foundation</div>
				</div>
				<div className="footer__menu1">
					<div className="footer__menuTitle">Terms of Service</div>
					<div className="footer__menuTitle">Privacy Policy</div>
					<div className="footer__menuTitle">Accessibility</div>
				</div>
				<div className="footer__menu1">
					<div className="footer__menuTitle">Desktop App</div>
					<div className="footer__menuTitle">Cookie Policy</div>
					<div className="footer__menuTitle">Enterprise Solutions</div>
					<div className="footer__menuTitle">Moblie</div>
				</div>
			</div>
			<div className="footer__icons">
				<FacebookIcon fontSize="large" className="footer__iconOne"></FacebookIcon>
				<TwitterIcon fontSize="large" className="footer__iconTwo"></TwitterIcon>
				<LinkedInIcon fontSize="large" className="footer__iconThree"></LinkedInIcon>
			</div>
			<div className="footer__copywrite">		
					© 2015 - 2020 Upwork - Clone Global Inc.				
			</div>
		</div>
	)
}

export default Footer
