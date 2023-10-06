import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';
import profileIcon from '../../public/images/profile.png';

function Navbar() {
    const { logout } = useAuth();
    const navigate = useNavigate();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleProfileClick = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleLogout = () => {
        logout();
        navigate("/signin");
    };

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <h1>Authentication Module</h1>
            </div>
            <div className="navbar-right">
                <div className="profile-icon" onClick={handleProfileClick}>
                    <img className='profile-img' src={profileIcon} alt={''} />
                    {isDropdownOpen && (
                        <div className="dropdown">
                            <ul>
                                <li onClick={handleLogout}>Logout</li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
