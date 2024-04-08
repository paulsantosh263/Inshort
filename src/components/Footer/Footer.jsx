import React from 'react'
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='look'>
                <div className='name'>
                    <img
                        style={{ cursor: "pointer" }}
                        src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png"
                        height='20%' alt='logo' />
                </div>
                <div className='text'>
                    <span className='short-text'>
                        <span>Inshorts</span> Pte. Ltd.
                    </span>
                    <div className='copy'>©
                        <span>COPYRIGHT 2024  </span>
                    </div>
                </div>

                <div>

                </div>
            </div>
        </div>
    )
}

export default Footer;