import React from 'react';
import Logo from '../../assets/logo.svg'
import './Navigation.css'


const Navigation = () => {
    return (
        <nav>
            <ul>
                <li><img src={Logo} alt="Todo machine" /></li>
            </ul>
        </nav>
    );
};

export default Navigation;