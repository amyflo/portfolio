import * as React from "react"
import "../styles/styles.css"
import { Heading, Text, Container, Box, Flex } from "theme-ui"
import { Link } from "gatsby";

function Navigation() {
    return (
        <nav>
        <Container px="6" py="3" bg="dark" color="white">
            <Flex as="nav" sx={{ alignItems: 'center', justifyContent: 'space-between', flexDirection: ['column', 'row'] }}>

                <Link to="/">
                <Box>
                    <Heading px={2} as="h2">amyflo</Heading>
                </Box>
                </Link>

                <Flex sx={{ justifyContent: 'flex-end', flex: 1 }}>
                         
                    <Link to="/work">
                        <Text sx={navLinkStyles} as="h3" px="2" py="1" mx="2">work</Text>
                    </Link>                    

                        <Link to="/play">
                            <Text sx={navLinkStyles} as="h3" px="2" py="1" mx="2">play</Text>
                        </Link>   

                    <Link to="/about"><Text sx={navLinkStyles} as="h3" px="2" py="1" mx="2">about</Text></Link>
                
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
