import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SmsIcon from '@material-ui/icons/Sms';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useDispatch } from 'react-redux';
import { logout } from '../../features/userSlice';
import { auth } from '../../firebase/firebase';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Logo from '../../images/logo.svg';




function Header() {
    const dispatch = useDispatch();

    const history = useHistory();

    const logoutOfApp = () => {
        dispatch(logout());
        auth.signOut();
    };  

    return (
        <div className="header">
           
            <div className="header__left">

                <img onClick={() => {history.push('/')}}  src={Logo} alt="LinkedIn"/>

                <div className="header__search">
                    <SearchIcon className="header__searchIcon" />
                    <input placeholder="Search LinkedIn" type="text"/>
                </div>
            </div>

            <div className="header__right">
                <Link to="/" style={{ textDecoration: 'none'}}> 
                    <HeaderOption Icon={HomeIcon} title="Home" />
                </Link>
                
                <Link to="/network" style={{ textDecoration: 'none'}}> 
                    <HeaderOption Icon={PeopleAltIcon} title="My Network" />
                </Link>
                

                <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOption Icon={SmsIcon} title="Messaging" />
                <HeaderOption Icon={NotificationsIcon} title="Notifications" />
               
                <Link to="/profile" style={{ textDecoration: 'none'}}> 
                    <HeaderOption avatar={true} title="Me" /> 
                </Link>
                 
                <HeaderOption Icon={ExitToAppIcon} title="Sign Out" onClick={logoutOfApp} />
            </div>
          

        </div>
    )
}

export default Header;
