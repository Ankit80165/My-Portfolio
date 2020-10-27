import React from 'react';
import './skill.css';
const Skill = (props) => {
	const styles = {
		width: `${props.width}%`
	}
	return (<div className="outerDiv">
		<h3>{props.title}</h3>
		<div className="inner0">
			<div className="inner1">
				<div className="inner2" style={styles}></div>
			</div>
		</div>
	</div>);
}

export default Skill;
