import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return(
            <footer>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <h4>About cab Hub</h4>
                            <div className='line-separator'></div>
                            <p>Quisque sollicitudin feugiat risus, eu posuere ex euismod eu. Phasellus hendrerit, massa efficitur.Quisque sollicitudin feugiat risus, eu posuere ex euismod eu.</p>
                            <div>
                                <a className='social-links' href=''><i className='fa fa-facebook'></i></a>
                                <a className='social-links' href=''><i className='fa fa-google-plus'></i></a>
                                <a className='social-links' href=''><i className='fa fa-twitter'></i></a>
                                <a className='social-links' href=''><i className='fa fa-instagram'></i></a>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <h4>Download</h4>
                            <div className='line-separator'></div>
                            <p>Quisque sollicitudin feugiat risus, eu posuere ex euismod eu. Phasellus hendrerit,</p>
                            <div>
                                <div>
                                    <a className='phone-users' href=''>Android Users</a>
                                    <i className='fa fa-android'></i>
                                </div>
                                <div>
                                    <a className='phone-users' href=''>IOS users</a>
                                    <i className='fa fa-apple'></i>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <h4>Contact</h4>
                            <div className='line-separator'></div>
                            <div className='row'>
                                <div className='col-xs-1'>
                                    <i className='fa fa-road'></i>
                                </div>
                                <div className='col-xs-10'>
                                    <p className='contact-paragraph'>+123, Main Street, Your City, New York, USA 789456</p>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-xs-1'>
                                    <i className='fa fa-mobile fa-lg'></i>
                                </div>
                                <div className='col-xs-10'>
                                    <p className='contact-paragraph'>+123 4567 8900</p>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-xs-1'>
                                    <i className='fa fa-envelope'></i>
                                </div>
                                <div className='col-xs-10'>
                                    <p className='contact-paragraph'>free@psdfreebies.com</p>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-xs-1'>
                                    <i className='fa fa-envelope'></i>
                                </div>
                                <div className='col-xs-10'>
                                    <p className='contact-paragraph'>free@psdfreebies.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer-info'>
                    <p className='copy-write'>Created By Przemysław Ostrowiński</p>
                    <p className='copy-write'>Copyright © 2015 PSDfreebies.com</p>
                </div>
            </footer>
        );
    }
};

export default Footer;