import React from 'react';
import classes from './Home.module.css';
import profilePic from '../../assets/Me.jpg';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

const Home = (props) => {
	return (<div className={classes.container} id="home">

		<div className={classes.containerInside}>
			<ScrollAnimation animateIn="backInLeft" animateOnce={true} offset={0}>
				<div className={classes.imgContainer}>
					<img src={profilePic} alt="Profile pic"/>
				</div>
			</ScrollAnimation>
			<ScrollAnimation animateIn="backInRight" animateOnce={true} offset={0}>
				<div className={classes.profile}>
					<h1 className={classes.profileHeading}>Ankit Kumar Majhi</h1>
					<p className={classes.profileDescription}>Programmer | FrontEnd WebDeveloper</p>
				</div>
			</ScrollAnimation>

		</div>

	</div>)
}

export default Home;
