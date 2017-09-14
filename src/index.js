import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Nav from './Nav.js';
import Hero from './Hero.js';
import Features from './Features.js';

class App extends Component {
    render() {
        return (
            <div>
                <Nav />
                <Hero />
                <Features />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));

