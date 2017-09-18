import React, {Component} from 'react';
import cellPhone from '../src/phone.png';

class Order extends Component {
    render() {
        return(
            <div className='order overflow-hidden'>
                <div className='container'>
                    <h2>Download</h2>
                    <h1>Best cab servies</h1>
                    <div className='row'>
                        <div className='col-md-5'>
                            <h3>Downlaod the Cab voucher app free! Get Exciting New Offers</h3>
                            <p>Quisque sollicitudin feugiat risus, eu posuere ex euismod eu. Phasellus hendrerit, massa efficitur.</p>
                            <div className='row'>
                                <div className='col-sm-6 col-xs-12 element-center'>
                                    <button className='btn'>Read More</button>
                                </div>
                                <div className='col-sm-6 col-xs-12 element-center'>
                                    <button className='btn'>Order Now</button>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-7 element-center'>
                            <img src={cellPhone} alt='cell phone' />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Order;