import React from 'react';
import classes from './Skills.module.css';
import Skill from './skill/skill.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SectionHeading from '../SectionHeading/SectionHeading.js';
const Skills = (props) => {
	return (<React.Fragment>
		<section id="skills" className={classes.skillSection}>
			<SectionHeading title="Skills" skew={true}/>
			<div className={classes.wrapper}>
				<Container fluid="fluid">
					<Row>
						<Col xs={12} sm={6} lg={4} xl={4}>
							<div className={classes.card}>
								<Skill width={60} title="React JS"/>
							</div>
						</Col>
						<Col xs={12} sm={6} lg={4} xl={4}>
							<div className={classes.card}>
								<Skill width={50} title="Node JS"/>
							</div>
						</Col>
						<Col xs={12} sm={6} lg={4} xl={4}>
							<div className={classes.card}>
								<Skill width={80} title="HTML"/>
							</div>
						</Col>
						<Col xs={12} sm={6} lg={4} xl={4}>
							<div className={classes.card}>
								<Skill width={75} title="CSS"/>
							</div>
						</Col>
						<Col xs={12} sm={6} lg={4} xl={4}>
							<div className={classes.card}>
								<Skill width={85} title="Programming"/>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</section>
	</React.Fragment>);
}

export default Skills;
