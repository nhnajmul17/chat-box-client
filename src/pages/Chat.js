import { Button } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Chat = () => {
    return (
        <div>
            this is chat
            <Link to="/">

                <Button>Home</Button>
            </Link>
        </div>
    );
};

export default Chat;