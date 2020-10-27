import React from 'react';
import classes from './Contact.module.css';
import SectionHeading from '../SectionHeading/SectionHeading.js';
const Contact = (props) => {
	return (<React.Fragment>
		<section id="contact" className={classes.contactSection}>
			<SectionHeading title="Contact Me" skew={false}/>
			<div className={classes.container}>
				<div className={classes.title}>
					<h1>Find&nbsp;
						<span>Me...</span>
					</h1>
				</div>
				<div className={classes.listHolder}>
					<ul className={classes.list}>
						<li className={classes.listItem}>
							<a href="/">
								<i className="fab fa-facebook"></i>&nbsp;&nbsp; facebook
							</a>

						</li>
						<li className={classes.listItem}>
							<a href="/">
								<i className="fab fa-linkedin-in"></i>&nbsp;&nbsp; LinkedIn
							</a>

						</li>
						<li className={classes.listItem}>
							<a href="/">
								<i className="fas fa-envelope-open-text"></i>&nbsp;&nbsp; mail
							</a>
						</li>
						<li className={classes.listItem}>
							<a href="/">
								<i className="fab fa-instagram"></i>&nbsp;&nbsp; Instagram
							</a>
						</li>
						<li className={classes.listItem}>
							<a href="/">
								<i className="fab fa-telegram-plane"></i>&nbsp;&nbsp; Telegram
							</a>
						</li>
					</ul>
				</div>

			</div>
			<p className={classes.para}>Made with React and Love&nbsp;&nbsp;&nbsp;<i className="fab fa-react"></i>&nbsp;<i className="fas fa-heart"></i>
			</p>
		</section>
	</React.Fragment>);
}
export default Contact;
