import React from 'react';
import './App.css';
import {Provider, useSelector} from 'react-redux';
import Header from './Header';
import Sidebar from './Sidebar'
import Feed from './Feed.js'
import selectUser from './features/userSlice'
import Login from './Login.js'
import {store} from './app/store'


function App() {
  return (
    <div className="app">
          <Header/>
          <Login/>          
    </div>
    
  );
}

export default App;

// {!user ? (<Login/>) : (
//   <div className='app_body'> 
//   <Sidebar/>
//   <Feed/>
//   </div>
//   )}
