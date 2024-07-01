import * as React from "react"
import "../styles/styles.css"
import { Heading, Text, Grid, AspectRatio, Divider, Progress, Image, Badge, Box, Flex, NavLink, Card, Container, Button } from "theme-ui"
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
        bg="#BCED09"
        >
        <AspectRatio
          ratio={1 / 1}
          >
          <img width="100%" src={puzzle} alt="puzzle" />
        </AspectRatio>
        <Box
         p={1} bg="blue">
            <Flex sx={{ flexDirection: 'column', justifyContent: 'flex-end' }} p="4" color="white" >
              <Heading as="h1" m={[1, 4]}>Amy F. Lo is a multidisciplinary designer and developer.</Heading>
            <Heading as="h1" m={[1, 4]}>She is graduating soon from Stanford with a bachelor's degree in Psychology ('24) and a master's degree in Computer Science, Human-Computer Interaction ('25). Incoming UX Design intern @ Amazon, Summer 2024.</Heading>
            <Link to="/work"><Text as="h3" m="4"><u>View my work</u></Text></Link>
            </Flex>
        </Box>
        <Link to="/projects/record">
          <Box p="4" bg="purple">
            <Heading as="h3" m="4" color="white">UI/UX, Software Development</Heading>
            <Heading as="h1" m="4" color="white">Record</Heading>
            <Heading as="h2" m="4" color="white">Music-centric journalling app that analyze your emotions musically. Built with React Native.</Heading>
          </Box>
        </Link>
        <Link to="/projects/paint-ck">
          <Box p="4" bg="orange">
          <Heading as="h3" m="4">Creative Code</Heading>
          <Heading as="h1" m="4">paint.ck</Heading>
          <Heading as="h2" m="4">Digital pixel art software and chromatic-scale beat sequencer. Built with ChucK and ChuGL.</Heading>
        </Box>
        </Link>
        <Link to="/projects/bunnyworld">
          <Box p="4" bg="lightblue">
            <Heading as="h3" m="4" >Software Development, Game Design</Heading>
            <Heading as="h1" m="4" >BunnyWorld</Heading>
            <Heading as="h2" m="4" >Android game creation tool to make and play games. Built with Java and Android studio.</Heading>
          </Box>
        </Link>
        <Link to="/projects/spaceboi">
          <Box p="4" bg="green">
            <Heading as="h3" m="4" >Game Design</Heading>
            <Heading as="h1" m="4" >SpaceBoi vs. the World 🔒</Heading>
            <Heading as="h2" m="4" >[Coming soon!] Digital game about climate conservation. Built with Unity.</Heading>
          </Box>
        </Link>
       
        </Grid>
      <Footer />
    </main>
  )
}
export default IndexPage

export const Head = () => <title>Amy Lo</title>
