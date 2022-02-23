import { CalendarViewDay, Create, EventNote, Image, Subscriptions } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import './Feed.css'
import { db } from './firebase';
import { onSnapshot,serverTimestamp, collection, addDoc,orderBy, query } from "firebase/firestore"; 

import InputOption from './InputOption';
import Post from './Post.js'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
function Feed() {

    const [input,setInput] = useState('')
    const [posts,setPosts]= useState([]);
    const user = useSelector(selectUser)
    // by mistake put timestamp as photourl, have to rename it afterwards
    useEffect(()=>{
        const q = query(collection(db,"posts"),orderBy("photoUrl","desc"))
         onSnapshot(q,(snapshot) => {
            setPosts(snapshot.docs.map(doc =>(
                {
                    id: doc.id,
                    data:doc.data(),
                })))    
        });
    },[])

    

    const sendPost = e =>{
        e.preventDefault();
        addDoc(collection(db, "posts"), {
            name:user.displayName,
            description:user.email,
            message: input,
            photoURL:user.photoUrl,
            photoUrl:serverTimestamp(),

          })
    }
    return (
    <div className='feed'>
        <div className='feed_inputContainer'>
        <div className='feed_input'>
        <Create />
        <form>
            <input value={input} placeholder="Type something and hit Enter!" onChange = {e=> setInput(e.target.value)} type="text" />
            <button onClick={sendPost} type="submit">Send</button>
        </form>
        </div>
        <div className='feed_inputoptions'>
            <InputOption Icon={Image} title="Photo" color="#70B5F9"/>
            <InputOption Icon={Subscriptions} title="Video" color="#E7A33E"/>
            <InputOption Icon={EventNote} title="Event" color="#C0CBCD"/>
            <InputOption Icon={CalendarViewDay} title="Write Article" color="#7FC15E"/>
        </div>
        </div>
        {posts.map(({id,data:{ name,description,message,photoURL}})=>(
            <Post 
                key={id}
                name={name}
                description={description}
                message={message}
                photoUrl={photoURL}
            />
        ))}


    </div>);
}       

export default Feed;