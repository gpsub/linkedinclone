import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar'
import Feed from './Feed.js'
import Login from './Login.js'
import { selectUser} from './features/userSlice'
import {Provider, useDispatch, useSelector} from 'react-redux';
import store from './app/store'
import { login } from './features/userSlice';
import { Auth } from './firebase';
const AppWrapper = () => {

  return (
    <Provider store={store}> 
      <App/> 
    </Provider>
  )
}

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(()=>{
    Auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName:userAuth.user.displayName,
            photoUrl: userAuth.user.photoUrl,
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