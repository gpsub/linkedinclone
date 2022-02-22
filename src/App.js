import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar'
import Feed from './Feed.js'
import Login from './Login.js'
import {selectUser} from './features/userSlice'
import {Provider, useSelector} from 'react-redux';
import store from './app/store'
const AppWrapper = () => {

  return (
    <Provider store={store}> 
      <App /> 
    </Provider>
  )
}

function App() {
  const user = useSelector(selectUser)
  return (
    <div className="app">
        <Header/>
 {!user ? (<Login/>) : (
   <div className='app_body'> 
   <Sidebar/>
   <Feed/>
   </div>
   )}
    </div>
  );
}
export default AppWrapper;