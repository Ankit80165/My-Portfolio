import React from 'react';
import EducationCard from './EducationCard/EducationCard.js';
import classes from './Education.module.css';
import SectionHeading from '../SectionHeading/SectionHeading.js';
const Education = (props) => {
	return (<React.Fragment>
		<section id='education' className={classes.EducationSection}>
			<SectionHeading title={'Education'} skew={true}/>
			<div className={classes.card1}>
				<EducationCard type="Secondary" year="2015" desc="In this year I successfully completed my Secondary Education from Memari V.M. Institution with a percentage of 91" delay={1000}/>
			</div>
			<div className={classes.card2}>
				<EducationCard type="Higher-Secondary" year="2017" desc="In this year I successfully completed my Higher-Secondary Education from Memari V.M. Institution with a percentage of 88" delay={1500} direction="right"/>
			</div>
			<div className={classes.card3}>
				<EducationCard type="Colege" year="2022" desc="In this year I will be graduated from IIEST. Currently I'm in 3rd year in the department of Computer Science and Technology." delay={2000}/>
			</div>
		</section>
	</React.Fragment>);
}

export default Education;
