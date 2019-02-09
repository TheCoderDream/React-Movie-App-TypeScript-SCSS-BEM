import React from 'react';
import './Header.scss';
// @ts-ignoren
import {Link} from "react-router-dom";
import leftLogo from './imdb-logo.png';
import rightLogo from './logo.svg';

const Header = () => {
    return (
        <div className={'header'}>
            <div className="header__content">
                <Link to={'/movies'}><img src={leftLogo} alt="" className="header__left-logo"/></Link>
                <img src={rightLogo} alt="" className="header__right-logo"/>
            </div>
        </div>
    );
};

export default Header;