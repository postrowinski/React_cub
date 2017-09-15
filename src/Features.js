import React, { Component } from 'react';
import heroCar from '../src/heroCar.png';

class Features extends Component {
    render() {
        return(
            <div className='features'>
                <img src={heroCar} alt='' />
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <h3>Best In City</h3>
                            <h2>Trusted Cab Servies in New York</h2>
                            <p>Quisque sollicitudin feugiat risus, eu posuere ex euismod eu. Phasellus hendrerit, massa efficitur dapibus pulvinar, sapien eros sodales ante, euismod aliquet nulla metus a mauris.Quisque sollicitudin feugiat risus, eu posuere ex euismod eu. Phasellus hendrerit, massa efficitur dapibus pulvinar, sapien eros sodales ante, euismod aliquet nulla metus a mauris.</p>
                            <button className="btn">Read More</button>
                        </div>
                        <div className='col-md-6'>
                            <div className='row'>
                                <form className='call-form'>
                                    <h3 className='form-header'>Cab</h3>
                                    <div className='row'>
                                        <div className='col-xs-6'>
                                            <label>Name</label>
                                            <input type='text'/>
                                        </div>
                                        <div className='col-xs-6'>
                                            <label>Phone</label>
                                            <input type='text'/></div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-xs-6'>
                                            <label>When</label>
                                            <input type='text'/>
                                        </div>
                                        <div className='col-xs-6'>
                                            <label>Time</label>
                                            <input type='text'/>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-xs-6'>
                                            <label>Start</label>
                                            <input type='text'/>
                                        </div>
                                        <div className='col-xs-6'>
                                            <label>End</label>
                                            <input type='text'/>
                                        </div>
                                        <div className='col-xs-12'>
                                            <label>Choose Vehicle</label>
                                            <input type='text'/>
                                        </div>
                                        <input type='submit' value='submit'/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Features;