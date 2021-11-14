import { React, useContext } from 'react';
import { myContext } from '../../Context';
import './MobileTopNav.css';

const MobileTopNav = () => {
    const userObj = useContext(myContext);

    // const getPicture = () => {
    //     if (userObj.thumbnail)
    //         return (userObj.thumbnail)
    //     return null;
    // }
    return (
        <div className="mobile-top-container">
            <span className="black-text"><span className="other-text">C</span>apy<span className="other-text">C</span>are</span>
            <img className="top-profile" src='#' alt="none" />
        </div>
    );
}
export default MobileTopNav;
