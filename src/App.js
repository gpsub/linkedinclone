import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar'
import Feed from './Feed.js'
import Login from './Login.js'
import {selectUser} from './features/userSlice'
import rootReducer from './features/reducer'
import { createStore } from 'redux';
import {Provider, useSelector} from 'react-redux';

const AppWrapper = () => {
  const store = createStore(rootReducer)

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