import React, { useState, useEffect } from 'react';
import './SidebarChat.css';
import { Avatar, IconButton } from '@material-ui/core';
import db from './firebase';
import { Link } from 'react-router-dom';

function SidebarChat({ id, name, addNewChat }) {

  const [seed, setSeed] = useState('');
  const [messages, setMessages] = useState("");

  useEffect(() => {
    if (id) {
      db.collection('rooms')
        .doc(id).collection('messages')
        .orderBy('timestamp', 'desc')
        .onSnapshot(snapshot => (
          setMessages(snapshot.docs.map((doc => doc.data())))
      ))
    }
  }, [id])

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000 )); //Generates a number string anytime the component loads therefore giving us a new avatar each time

  }, [])


  const createChat = () => {
    const roomName = prompt("Please enter name of chat room:: ");
    
    if (roomName) {
      db.collection('rooms').add({
        name: roomName
      });
    }
  };

  return !addNewChat ?  (
    <Link to={`/rooms/${id}`}>
      <div className="sidebarChat">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="sidebarChat__info">
          <h2>{name}</h2>
          <p><small>{messages[0]?.message}</small></p>
        </div>
      </div>
    </Link>
      
    ) : (
      <div onClick={createChat} className="sidebarChat">
        <h2>Add New Chat</h2>
      </div>
    )
}

export default SidebarChat
