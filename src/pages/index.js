import * as React from "react"
import "../styles/styles.css"
import { Heading, Text, Grid, Divider, Progress, Image, Badge, Box, Flex, NavLink, Card, Container, Button } from "theme-ui"
import puzzle from "../images/home.png"
import { Link } from "gatsby";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer"

const IndexPage = () => {


  return (
    <main>
      <Navigation/>
        <Grid
          columns={[1, 1, 1, 2]}
          gap="0"
          m="0"
          bg="black"
        >
          <img width="100%" src={puzzle} alt="puzzle" />
          <Box p="4" bg="blue">
            <Flex sx={{ flexDirection: 'column', justifyContent: 'flex-end' }} p="4" color="white" >
              <Heading as="h1" m="4">Amy Lo is a multidisciplinary designer and developer.</Heading>
              <Heading as="h1" m="4">She is graduating soon from Stanford with a bachelor's degree in Psychology ('24) and a master's degree in Computer Science, Human-Computer Interaction ('25). Incoming UX Design intern @ Amazon, Summer 2024.</Heading>
            <Link to="/record"><Text as="h3" m="4"><u>Read my latest case study</u></Text></Link>
            </Flex>
          </Box>
          {/* <Box p="4" bg="blue">
            <Heading as="h3" m="4" color="white">UI/UX</Heading>
            <Heading as="h1" m="4" color="white">Record</Heading>
            <Heading as="h2" m="4" color="white">Register now to save 50% and be the first to reserve a seat at the most popular talks.</Heading>
          </Box>
        <Box p="4" bg="green">
          <Heading as="h3" m="4" color="white">UI/UX</Heading>
          <Heading as="h1" m="4" color="white">Record</Heading>
          <Heading as="h2" m="4" color="white">Register now to save 50% and be the first to reserve a seat at the most popular talks.</Heading>
        </Box>
        <Box p="4" bg="red">
          <Heading as="h3" m="4" color="white">UI/UX</Heading>
          <Heading as="h1" m="4" color="white">Record</Heading>
          <Heading as="h2" m="4" color="white">Register now to save 50% and be the first to reserve a seat at the most popular talks.</Heading>
        </Box>
        <Box p="4" bg="yellow">
          <Heading as="h3" m="4" color="white">UI/UX</Heading>
          <Heading as="h1" m="4" color="white">Record</Heading>
          <Heading as="h2" m="4" color="white">Register now to save 50% and be the first to reserve a seat at the most popular talks.</Heading>
        </Box> */}
        </Grid>
      <Footer />
    </main>
  )
}
export default IndexPage

export const Head = () => <title>Amy Lo</title>
