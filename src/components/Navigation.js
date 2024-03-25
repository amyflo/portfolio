import * as React from "react"
import "../styles/styles.css"
import { Heading, Text, Container, Box, Flex } from "theme-ui"
import { Link } from "gatsby";

const email = 'amyflo@stanford.edu';
const linkedin = 'https://linkedin.com/in/amyflo';
const resume = 'https://drive.google.com/file/d/1gd2ReAsK08T-LJYuzyq6NZ4qYhV4EEkU/view?usp=sharing'

function Navigation() {
    return (
        <nav>
        <Container px="6" py="3" bg="black" color="white">
            <Flex as="nav" sx={{ alignItems: 'center', justifyContent: 'space-between', flexDirection: ['column', 'row'] }}>

                <Link to="/">
                <Box>
                    <Heading px={2} as="h2">Amy Lo</Heading>
                </Box>
                </Link>

                <Flex sx={{ justifyContent: 'flex-end', flex: 1 }}>
                    {/* <Link to="/work"> */}
                        <Text sx={navLinkStyles} as="h3" px="2" py="1" mx="2">Work 🔒</Text>
                    {/* </Link> */}                    

                    <Link to="/about"><Text sx={navLinkStyles} as="h3" px="2" py="1" mx="2">About</Text></Link>
                
                </Flex>
            </Flex>
        
        </Container>
        </nav>
    );
}

const navLinkStyles = {
    ':hover': {
        transform: 'scale(1.05)',
        textDecoration: 'underline'
    },
}

export default Navigation;
