import React from 'react';
import classes from './NavBar.module.css';

class NavBar extends React.Component {
	state = {
		isVisible: false,
		menuItems: [
			{
				title: 'Home',
				url: '#home'
			}, {
				title: 'About',
				url: "#about"
			}, {
				title: 'Education',
				url: '#education'
			}, {
				title: 'Skills',
				url: '#skills'
			}, {
				title: 'My Works',
				url: '#works'
			}, {
				title: 'Contact Me',
				url: '#contact'
			}
		]
	}
	toggleHandler = () => {
		this.setState({
			isVisible: !this.state.isVisible
		});
	}
	render() {
		let cls = [classes.ListContainer];
		if (this.state.isVisible) {
			cls = [classes.toDown, classes.ListContainer];
		}
		return (<React.Fragment>
			<nav className={classes.NavBar}>
				<div className={classes.iconHolder}>
					<i className={this.state.isVisible
							? "fas fa-times"
							: "fas fa-bars"} onClick={this.toggleHandler}></i>

				</div>
				<div className={cls.join(" ")}>
					<ul className={classes.NavBarList}>
						{
							this.state.menuItems.map((item, index) => {
								return (<li key={index} className={classes.NavBarListItem} onClick={this.toggleHandler}>
									<a href={item.url} className={classes.NavLinks}>{item.title}</a>
								</li>)
							})
						}
					</ul>
				</div>
			</nav>
		</React.Fragment>);
	}
}

export default NavBar;
