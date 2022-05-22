import React from 'react';
import './Footer.css';
import logo from '../../../images/Logo-Vitameals-1.png'

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className='footer bg-dark w-100'>
            <div className='mx-auto w-25'>
                <img className='w-50 ms-5 ps-5' src={logo} alt="" />
                <p className='text-white text-center me-3'>Copyright &copy; {year} . All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;