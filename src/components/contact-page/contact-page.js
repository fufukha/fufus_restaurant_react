import React, { Component } from 'react';
import './sass/contact-page.scss';
 
 export default class ContactPage extends Component {
	render() {
		return(
			<main className="contact">
				<dl className="index-3">
					<dt>GitHub</dt>
					<dd><a href="https://github.com/fufukha" alt="fufukha github">fufukha</a></dd>
				</dl>
				<div className="overlay"></div>
			</main>
		)		
	}
}
