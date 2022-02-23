import React from 'react';
import {Avatar} from '@mui/material'
import './sidebar.css'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
function Sidebar() {
    const user = useSelector(selectUser)
    const recentItem = (topic) => (
        <div className='sidebar__recentItem'>
            <span className='sidebar__hash'>#</span>
            <p>{topic}</p>
        </div>
    );
    return (<div className='sidebar'>
      <div className='sidebar__top'>
        <img src="https://images.unsplash.com/photo-1531315630201-bb15abeb1653?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt=""/>
        <Avatar src={user.photoUrl}className="sidebar__avatar">{user.email[0]}</Avatar>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
      </div>
      <div className='sidebar__stats'>
            <div className='sidebar__stat'>
                <p> who viewed you</p>
                <div className='sidebar__statnumber'>123</div>
            </div>
            <div className='sidebar__stat'>
            <p> who viewed you</p>  
                <div className='sidebar__statnumber'>456</div>
            </div>
            </div>

            <div className='sidebar_bottom'>
                   <p>Recent</p>
                    {recentItem('reactjs')}
                    {recentItem('programming')}
                    {recentItem('engineering')}
                    {recentItem('nextjs')}
                    {recentItem('JS')}
                    {recentItem('android')}
                </div>
    </div> );
}

export default Sidebar;