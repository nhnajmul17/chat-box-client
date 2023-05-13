import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

const Login = () => {
    const [show, setshow] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleShow = () => {
        setshow(!show)
    }

    const handleLogin = () => {

    }
    return (
        <VStack spacing={5} >
            <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder='Your Email' onBlur={(e) => setEmail(e.target.value)} />
            </FormControl>
            <FormControl isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                    <Input type={show ? "text" : "password"} placeholder='Your Password' onBlur={(e) => setPassword(e.target.value)} />
                    <InputRightElement>
                        <Button size={"sm"} onClick={handleShow}>{show ? "Hide" : "Show"}</Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>
            <Button colorScheme='cyan' onClick={handleLogin}>Login</Button>
        </VStack>
    );
};

export default Login;