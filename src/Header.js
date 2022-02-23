import React from 'react';
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './headerOption.js';
import { Chat, Home, Notifications, SupervisorAccount } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { Auth } from './firebase';
import {logout} from './features/userSlice'
function Header() {
    const dispatch = useDispatch()
    const logoutofapp = () =>{
            dispatch(logout())
            Auth.signOut()
    }
    return (<div className='header'>
        <div className='header__left'>
          <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" />
            <div className='header__search'>
                <SearchIcon/>
                <input placeholder='Search' type="text"/>
            </div> 
        </div>  
        <div className='header__right'>
            <HeaderOption Icon={Home} title="Home" />
            <HeaderOption Icon={SupervisorAccount} title="My Network"/>
            <HeaderOption Icon={Chat} title="Messaging"/>
            <HeaderOption Icon={Notifications} title="Notifications"/>
            <HeaderOption avatar="https://img.icons8.com/color/50/000000/ferrari-badge.png" onClick={logoutofapp} title="me"/>
    </div>
    </div>);
}

export default Header;