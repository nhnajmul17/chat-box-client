import { Button } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            this is Home
            <Link to="/chats">

                <Button>Chat</Button>
            </Link>
        </div>
    );
};

export default Home;