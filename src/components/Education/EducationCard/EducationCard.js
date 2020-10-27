import React from 'react';
import classes from './EducationCard.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

const EducationCard = (props) => {
	let direction = "slideInLeft";
	if (props.direction === 'right') {
		direction = 'slideInRight';
	}
	return (<React.Fragment>
		<ScrollAnimation animateIn={direction} duration={0.5} animateOnce={true} delay={props.delay} offset={0}>
			<div className={classes.container}>
				<h4 className={classes.contanierHeading}>{props.type}&nbsp;Education</h4>
				<hr/>
				<div className={classes.innerContainer}>
					<div className={classes.yearHolder}>
						<h2>{props.year}</h2>
					</div>
					<div className={classes.paraHolder}>
						<p>{props.desc}</p>
					</div>
				</div>
			</div>
		</ScrollAnimation>
	</React.Fragment>);
}

export default EducationCard;
