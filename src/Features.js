import React, { Component } from 'react';
import heroCar from '../src/heroCar.png';

class Features extends Component {
    render() {
        return(
            <div className='features'>
                <img src={heroCar} alt='' />
                <div className='container'>
                    <div className='col'>
                        <h3>Best In City</h3>
                        <h2>Trusted Cab Servies in New York</h2>
                        <p>Quisque sollicitudin feugiat risus, eu posuere ex euismod eu. Phasellus hendrerit, massa efficitur dapibus pulvinar, sapien eros sodales ante, euismod aliquet nulla metus a mauris.Quisque sollicitudin feugiat risus, eu posuere ex euismod eu. Phasellus hendrerit, massa efficitur dapibus pulvinar, sapien eros sodales ante, euismod aliquet nulla metus a mauris.</p>
                        <button className="btn">Read More</button>
                    </div>
                    <div className='col'>sasa</div>
                </div>
            </div>
        );
    }
};

export default Features;