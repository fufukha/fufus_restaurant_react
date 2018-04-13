import React, { Component } from 'react';
import HomePage from '../homepage/homepage';
import MenuPage from '../menu-page/menu-page';
import ContactPage from '../contact-page/contact-page';
import './sass/app.scss';

export default class App extends Component {
	constructor() {
			super();
			
			this.state = {
				activePage: "Home",
				showActivePage: <HomePage />
			};
		}
			
	render() {
		const pages =  ["Home", "Menu", "Contact"];
		
		let pageList = pages.map( (page, i) => (      
			<li key={i} onClick={this._handleClick.bind(this, page)} className={this.state.activePage == page ? "active" : null}>{page}</li>
		));   
		
		let activePageElement;
				
		switch (this.state.activePage) {
			case 'Home':
				activePageElement =  <HomePage />
				break;
			case 'Menu':
				activePageElement =  <MenuPage />
				break;
			case 'Contact': 
				activePageElement =  <ContactPage />
				break;
		}
		
	 return (
			<div className="container">
				<header>
					<h1>Fufu</h1>
					<h2>Wine & Steak Resturant</h2>
				</header>
				<nav>
					<ul>
						{pageList}
					</ul>
				</nav>
				{activePageElement}        
			</div>
		);
	}
	
	_handleClick (page, event) {
		event.preventDefault();
		
		this.setState({
			activePage: page
		});
	}
}
