import * as React from "react"
import "../styles/styles.css"
import { Heading, Text, Box, Flex, Container } from "theme-ui"
import { Link } from "gatsby";

const email = 'amyflo@stanford.edu';
const linkedin = 'https://linkedin.com/in/amyflo';
const resume = 'https://drive.google.com/file/d/1gd2ReAsK08T-LJYuzyq6NZ4qYhV4EEkU/view?usp=sharing'

function Footer() {
    return (
        <Container px={[3,6]} py="4" bg="dark" color="white">
            <Flex as="nav" sx={{ alignItems: 'center', justifyContent: 'space-between', flexDirection: ['column', 'row'] }}>
          
                <Box>
                    <Heading px={2} as="h2">Get in touch!</Heading>
                </Box>
                
                <a target="_blank" href={"mailto:" + email}>
                    <Text sx={navLinkStyles} as="h3" px="2">Email</Text>
                </a>

                <a target="_blank" href={linkedin}>
                    <Text sx={navLinkStyles} as="h3" px="2">LinkedIn</Text>
                </a>

                <a target="_blank" href={resume}>
                    <Text sx={navLinkStyles} as="h3" px="2">Resume</Text>
                </a>
            </Flex>

        </Container>
    );
}

const navLinkStyles = {
    ':hover': {
        textDecoration: 'underline'
    },
}

export default Footer;
