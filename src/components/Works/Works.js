import React from 'react';
import classes from './Works.module.css';
import SectionHeading from '../SectionHeading/SectionHeading.js';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

const Works = (props) => {
	return (<React.Fragment>
		<section id="works" className={classes.worksSection}>
			<SectionHeading title="My Works" skew={true}/>
			<div className={classes.container}>
				<ScrollAnimation animateIn="slideInLeft" animateOnce={true} offset={0}>
					<div className={classes.card}>
						<div className={classes.imageContainer1}></div>
						<div className={classes.infos}>
							<h3 className={classes.title}>uHost</h3>
							<p className={classes.desc}>
								GitHub is built for collaboration. Set up an organization to improve the way your team works together, and get access to more features.
							</p>
							<a href="https://github.com/Ankit80165/uHost" className={classes.btn}>Check It Out!</a>
						</div>
					</div>
				</ScrollAnimation>
				<ScrollAnimation animateIn="slideInRight" animateOnce={true} offset={0}>
					<div className={classes.card}>
						<div className={classes.imageContainer2}></div>
						<div className={classes.infos}>
							<h3 className={classes.title}>Budgety</h3>
							<p className={classes.desc}>
								GitHub is built for collaboration. Set up an organization to improve the way your team works together, and get access to more features.
							</p>
							<a href="https://github.com/Ankit80165/Budgety" className={classes.btn}>Check It Out!</a>
						</div>
					</div>
				</ScrollAnimation>
			</div>
		</section>

	</React.Fragment>);
}

export default Works;
