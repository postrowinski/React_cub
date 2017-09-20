import React, {Component} from 'react';

class Details extends Component {
    render() {
        return(
            <section className='details'>
                <div className='container'>
                    <h2>We do best</h2>
                    <h1>Than you wish</h1>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='col-xs-2'>
                                <div className='fa-background'>
                                    <i className='fa fa-star'></i>
                                </div>
                            </div>
                            <div className='col-xs-9'>
                                <h3>Home Pickup</h3>
                                <p>Quisque sollicitudin feugiat risus, eu posuere ex euismod eu. Phasellus hendrerit, massa efficitur.</p>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='col-xs-2'>
                                <div className='fa-background'>
                                    <i className='fa fa-hourglass'></i>
                                </div>
                            </div>
                            <div className='col-xs-9'>
                                <h3>Home Pickup</h3>
                                <p>Quisque sollicitudin feugiat risus, eu posuere ex euismod eu. Phasellus hendrerit, massa efficitur.</p>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='col-xs-2'>
                                <div className='fa-background'>
                                    <i className='fa fa-glass'></i>
                                </div>
                            </div>
                            <div className='col-xs-9'>
                                <h3>Home Pickup</h3>
                                <p>Quisque sollicitudin feugiat risus, eu posuere ex euismod eu. Phasellus hendrerit, massa efficitur.</p>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='col-xs-2'>
                                <div className='fa-background'>
                                    <i className='fa fa-gears'></i>
                                </div>
                            </div>
                            <div className='col-xs-9'>
                                <h3>Home Pickup</h3>
                                <p>Quisque sollicitudin feugiat risus, eu posuere ex euismod eu. Phasellus hendrerit, massa efficitur.</p>
                            </div>
                        </div>
                    </div>
                    <button className='btn'>Read more</button>
                </div>
            </section>
        );
    }
}

export default Details;