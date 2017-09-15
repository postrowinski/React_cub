import React, { Component } from 'react';
import car from '../src/offert_car.png';

class Blog extends Component {
    render() {
        return (
            <div className='blog'>
                <div className='container'>
                    <h2>Our</h2>
                    <h1>Tariffs</h1>
                    <div className='row'>
                        <div className='col-md-4'>
                            <div className='blog-offert'>
                                <img src={car} alt='car'/>
                                <h3>Economy Class</h3>
                                <p>Quisque sollicitudin feugiat risus, eu posuere ex euismod eu. Phasellus hendrerit, massa efficitur.</p>
                                <h2>$1,5/MI</h2>
                                <button className='btn'>Read more</button>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='blog-offert'>
                                <img src={car} alt='car'/>
                                <h3>Economy Class</h3>
                                <p>Quisque sollicitudin feugiat risus, eu posuere ex euismod eu. Phasellus hendrerit, massa efficitur.</p>
                                <h2>$1,5/MI</h2>
                                <button className='btn'>Read more</button>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='blog-offert'>
                                <img src={car} alt='car'/>
                                <h3>Economy Class</h3>
                                <p>Quisque sollicitudin feugiat risus, eu posuere ex euismod eu. Phasellus hendrerit, massa efficitur.</p>
                                <h2>$1,5/MI</h2>
                                <button className='btn'>Read more</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Blog;