import React from 'react';
import './App.css';
import "animate.css/animate.compat.css";
import NavBar from './components/NavBar/NavBar.js';
import Home from './components/Home/Home.js';
import About from './components/About/About.js';
import Education from './components/Education/Education.js';
import Skills from './components/Skills/Skills.js';
import Works from './components/Works/Works.js';
import Contact from './components/Contact/Contact.js';
function App() {
	return (<React.Fragment>
		<header>
			<NavBar/>
			<Home/>
		</header>
		<main>
			<About/>
			<Education/>
			<Skills/>
			<Works/>
			<Contact/>
		</main>
	</React.Fragment>);
}

export default App;
