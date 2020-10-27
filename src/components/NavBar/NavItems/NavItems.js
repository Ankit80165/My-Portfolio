import React from 'react';
import classes from './NavItems.module.css';

const NavItems = (props) => {
	const cls = ["nav-item", classes.NavItem];
	const ref = `#${props.title}`
	return (<li className={cls.join(" ")}>
		<a href={ref} className="nav-link">{props.title}</a>
	</li>);
}

export default NavItems;
