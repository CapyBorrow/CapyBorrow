import { React, useState, useEffect } from 'react';
import axios from 'axios';

import './MobileTopNav.css';

const MobileTopNav = () => {
    const [pic, setPic] = useState(null);

    useEffect(() => {
        axios
            .get("http://localhost:6868/auth/getuser", { withCredentials: true })
            .then((res) => {
                if (res.data) {
                    setPic(res.data.thumbnail);
                }
            });
    }, []);

    return (
        <div className="mobile-top-container">
            <span className="black-text"><span className="other-text">C</span>apy<span className="other-text">C</span>are</span>
            <img className="top-profile" src={pic} alt="none" />
        </div>
    );
}
export default MobileTopNav;
