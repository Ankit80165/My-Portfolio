import React from 'react';
import classes from './About.module.css';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutPicture from '../../assets/AboutMe.jpg';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import SectionHeading from '../SectionHeading/SectionHeading.js';
const About = (props) => {
	const cls1 = [classes.innerContainer, classes.imageContainer];
	const cls2 = [classes.innerContainer, classes.paragraphContainer];
	return (<section id='about' className={classes.aboutSection}>
		<SectionHeading title={'About'} skew={true}/>
		<Container>
			<ScrollAnimation animateIn="zoomIn" animateOnce={true} duration={1} offset={10} delay={1000}>

				<div className={classes.container}>
					<div className={cls1.join(' ')}>
						<img src={AboutPicture} alt="about pic"/>
						<h3 className={classes.imageHeading}>Hello i'm
							<span>&nbsp;Ankit</span>
							<hr/>
						</h3>

					</div>

					<div className={cls2.join(" ")}>
						<h3 className={classes.paraHeading}>Hello i'm
							<span>&nbsp;Ankit</span>
							<hr/>
						</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan dictum tortor, at commodo dolor blandit at. Vivamus eros felis, vehicula ac felis a, malesuada pellentesque elit. Sed quis posuere tortor, in convallis ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam venenatis vehicula urna.
						</p>
					</div>

				</div>

			</ScrollAnimation>

		</Container>
	</section>);
}

export default About;
