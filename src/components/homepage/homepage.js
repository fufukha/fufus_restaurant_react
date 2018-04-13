import React, { Component } from 'react';
import './sass/homepage.scss';

export default class HomePage extends React.Component {
  render() {
    return (
      <main className="home active">
        <div className="promo_1">
          <p>Members get rewards</p>
        </div>
        <div className="promo_2">
          <p>20% Off</p>
        </div>
        <div className="hero"></div>
      </main>
    );
  }
}
