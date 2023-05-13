import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

const Signup = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [show, setShow] = useState(false)


    const handleShow = () => {
        setShow(!show)
    }

    const handlePicture = (pic) => {

    }

    const handleSignUp = () => {

    }

    return (
        <VStack spacing={5} >
            <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <Input type="text" placeholder='Your Name' onBlur={(e) => setName(e.target.value)} />
            </FormControl>
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
            <FormControl isRequired>
                <FormLabel>Confirm Password</FormLabel>
                <InputGroup>
                    < Input type={show ? "text" : "password"} placeholder='Your Password' onBlur={(e) => setConfirmPass(e.target.value)} />
                    <InputRightElement>
                        <Button size={'sm'} onClick={handleShow}>{show ? "Hide" : "Show"}</Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>

            <FormControl isRequired>
                <FormLabel>Upload you picture</FormLabel>
                <Input size={"sm"} type="file" accept='image/*' placeholder='Upload Your Picture' onBlur={(e) => handlePicture(e.target.files[0])} />
            </FormControl>

            <Button colorScheme='cyan' onClick={handleSignUp}>Sign Up</Button>
        </VStack>
    )
};

export default Signup;