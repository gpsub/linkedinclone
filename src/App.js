import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar'
import Feed from './Feed.js'
import Login from './Login.js'
import {login, selectUser} from './features/userSlice'
import {Provider, useSelector} from 'react-redux';
import store from './app/store'
import { Auth } from './firebase';
import { useDispatch } from 'react-redux';
const AppWrapper = () => {

  return (
    <Provider store={store}> 
      <App /> 
    </Provider>
  )
}

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch();
  useEffect(()=>{
    Auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName:userAuth.displayName,
            photoUrl: userAuth.photoUrl,
          })
         
        )
      }
    })
  })
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