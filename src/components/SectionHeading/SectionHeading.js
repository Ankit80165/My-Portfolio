import React from 'react';
import classes from './SectionHeading.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
const SectionHeading = (props) => {
	let styles = null;
	if (props.skew) {
		styles = {
			'transform': 'skewY(3deg)'
		}
	}
	return (<div className={classes.headingWrapper} style={styles}>
		<ScrollAnimation animateIn="flipInY" animateOnce={true}>
			<h1>{props.title}</h1>
			<hr/>
		</ScrollAnimation>

	</div>);
}

export default SectionHeading;
