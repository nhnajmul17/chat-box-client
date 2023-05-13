import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, useToast, VStack } from '@chakra-ui/react';
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
    const toast = useToast()
    const userData = {
        name,
        email, password
    }
    const handleSignUp = () => {
        if (!name || !email || !password || !confirmPass) {
            toast({
                title: 'Please fill all the fields',
                status: 'warning',
                duration: 2000,
                isClosable: true,
                position: "top",
                colorScheme: "cyan"
            })
            return
        }
        if (password !== confirmPass) {
            toast({
                title: 'Password didnt match',
                status: 'warning',
                duration: 2000,
                isClosable: true,
                position: "top",
                colorScheme: "red"
            })
            return
        }
        try {
            fetch('http://localhost:5000/api/v1/users', {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(userData)
            }).then(res => res.json())
                .then(data => {
                    if (data.status === "success") {
                        // alert("User Created Successfully")
                        toast({
                            title: 'User Created Successfully',
                            status: 'success',
                            duration: 2000,
                            isClosable: true,
                            position: "top",
                            colorScheme: "green"
                        })
                    }
                })

        } catch (error) {
            console.log(error)
        }
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

            <Button colorScheme='cyan' onClick={handleSignUp}>Sign Up</Button>
        </VStack>
    )
};

export default Signup;