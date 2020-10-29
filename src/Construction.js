import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import FontDownloadOutlinedIcon from '@material-ui/icons/FontDownloadOutlined';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import './Construction.css';

const Construction = () => {
	return (
		<div className="construction">
			<div className="construction__navbar">
				<IconButton href="https://www.andresthedev.com">
					<FontDownloadOutlinedIcon style={{ fontSize: 50 }} />
				</IconButton>
				<a href="https://www.andresthedev.com" rel="noreferrer">
					Home
				</a>
			</div>
			<div className="construction__title">
				<h3>Our new site is</h3>
				<div className="construction__comingSoon">
					<h1>Coming</h1>
					<h1>Soon</h1>
				</div>
				<h3>Stay Tuned!</h3>
			</div>
			<div className="construction__social">
				<IconButton
					target="_blank"
					href="https://www.facebook.com/andres.medrano.98"
				>
					<FacebookIcon style={{ fontSize: 35 }} />
				</IconButton>
				<IconButton
					target="_blank"
					href="https://www.linkedin.com/in/andres-medrano-19ba91132/"
				>
					<LinkedInIcon style={{ fontSize: 35 }} />
				</IconButton>
				<IconButton>
					<TwitterIcon style={{ fontSize: 35 }} />
				</IconButton>
				<IconButton target="_blank" href="https://github.com/amedra13">
					<GitHubIcon style={{ fontSize: 35 }} />
				</IconButton>
			</div>
		</div>
	);
};

export default Construction;
