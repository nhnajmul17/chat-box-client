import { Button } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Chat = () => {

    const [chats, setChats] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/api/v1/chats")
            .then(res => res.json())
            .then(data => setChats(data))
    }, [])


    return (
        <div>
            {
                chats.map(chat => <h1 key={chat._id}>{chat.chatName}</h1>)
            }
            this is chat
            <Link to="/">

                <Button>Home</Button>
            </Link>
        </div>
    );
};

export default Chat;