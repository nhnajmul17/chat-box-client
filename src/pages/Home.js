import { Box, Container, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react';
import React from 'react';
import Login from '../components/Authentication/Login';
import Signup from '../components/Authentication/Signup';

const Home = () => {
    return (
        <Container maxW={'xl'} centerContent >
            <Box d="flex" justifyContent={'center'}>
                <Text fontSize={'4xl'} fontWeight={'bold'} color={'cyan.700'}>Chat-Box</Text>
            </Box>
            <Box p={4} w="100%" borderRadius={"lg"} borderWidth={"1px"}>
                <Tabs variant='soft-rounded' colorScheme='cyan'>
                    <TabList mb="1em">
                        <Tab m={5}>Login</Tab>
                        <Tab m={5}>SignUp</Tab>
                    </TabList>
                    <TabPanels backgroundColor={'cyan.300'}>
                        <TabPanel>
                            <Login></Login>
                        </TabPanel>
                        <TabPanel>
                            <Signup></Signup>
                        </TabPanel>
                    </TabPanels>
                </Tabs>

            </Box>

        </Container>
    );
};

export default Home;