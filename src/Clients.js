import React, {Component} from 'react';

class Clients extends Component {
    render() {
        return(
            <section className='clients'>
                <div className='container'>
                    <h2>Happy Client's</h2>
                    <h1>Testimonials</h1>
                    <div className='row'>
                        <div className='col-sm-6'>
                            <div className='cloud-background'>
                                <p>Quisque sollicitudin feugiat risus, eu posuere ex euismod eu. Phasellus hendrerit, massa efficitur.Quisque sollicitudin feugiat risus.</p>
                                <div className='row'>
                                    <div className='col-md-2 col-sm-3'>
                                        <div className='picture'></div> 
                                    </div>
                                    <div className='col-md-10 col-sm-9'>
                                        <p className='staff-full-name'>John Doe</p>
                                        <p className='staff-profession'>Business man</p>
                                    </div>
                                </div>
                                <div className='cloud-left'></div>
                            </div>
                        </div>
                        <div className='col-sm-6'>
                            <div className='cloud-background'>
                                <p>Quisque sollicitudin feugiat risus, eu posuere ex euismod eu. Phasellus hendrerit, massa efficitur.Quisque sollicitudin feugiat risus.</p>
                                <div className='row'>
                                    <div className='col-md-2 col-sm-3'>
                                        <div className='picture'></div> 
                                    </div>
                                    <div className='col-md-10 col-sm-9'>
                                        <p className='staff-full-name'>John Doe</p>
                                        <p className='staff-profession'>Business man</p>
                                    </div>
                                    <div className='cloud-right'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
};

export default Clients;