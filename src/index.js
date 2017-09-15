import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import './flexboxgrid.min.css';
import Nav from './Nav.js';
import Hero from './Hero.js';
import Features from './Features.js';
import Blog from './Blog.js';

class App extends Component {
    render() {
        return (
            <div>
                <Nav />
                <Hero />
                <Features />
                <Blog />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));

