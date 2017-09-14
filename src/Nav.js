import React, { Component } from 'react';


class Nav extends Component {
 
    render() {
        const headers = ['About', 'Features', 'Blog', 'Order now', 'Contacts'];
        const navList = headers.map((header) =>
            <li><a href=''>{header}</a></li>                       
        );
              
        return (
            <nav>
                <div className='container'>
                    <div className='logo-place'>
                        <p className='logo'><span>Cab</span><span>Hub</span></p>
                        <p className='logo-slogan'></p>
                    </div>
                    <ul className='nav'>
                        {navList}
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Nav;