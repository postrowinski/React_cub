import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import './flexboxgrid.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import Nav from './Nav.js';
import Hero from './Hero.js';
import Features from './Features.js';
import Blog from './Blog.js';
import Details from './Details.js';
import Order from './Order.js';
import Clients from './Clients.js'

class App extends Component {
    render() {
        return (
            <div>
                <Nav />
                <Hero />
                <Features />
                <Blog />
                <Details />
                <Order />
                <Clients />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));

