import React, { Component } from 'react';
import './sass/menu-page.scss';

export default class MenuPage extends Component {
	render() {
		const menuList = [
			"Wine & steak",
			"Steak with wine",
			"Vegan steak with non-alcoholic wine"];
		
		return (
			<main className="menu">
				<ul className="index-3">
					{menuList.map( item => <li>{item}</li>)}
				</ul>
				<div className="overlay"></div>
			</main>
		);
	}
}
