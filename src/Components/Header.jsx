import React from 'react';

function Header() {
    return (
        <div id='main'>
            <div className='header-heading'>
                <h3>Its Great Time For A Good Taste Of Burger</h3>
                <h1><span>BURGER</span>FOR<br/>WEEK</h1>
                <p className='details'> Discover the best collection of Burger in Delhi NCR
                </p>
                <div className='header-btns'>
                    <a href='/#' className='header-btn'>Order</a>
                </div>
            </div>
            
        </div>
    )
}

export default Header;
