import * as React from "react"
import "../styles/styles.css"
import { Heading, Text, Grid, AspectRatio, Divider, Progress, Image, Badge, Box, Flex, NavLink, Card, Container, Button } from "theme-ui"
import puzzle from "../images/home.png"
import { Link } from "gatsby";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer"

const NotFoundPage = () => {


  return (
    <main>
      <Navigation />
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
            <Heading as="h1" m={[1, 4]}>Oops!.</Heading>
            <Heading as="h1" m={[1, 4]}>Couldn't find the page you're looking for.</Heading>
            <Heading as="h1" m={[1, 4]}>While you're here, take a nice long break. Stretch. Get a cup of coffee. Meditate. I'm glad you're here.</Heading>
            <Link to="/"><Text as="h3" m="4"><u>View my work</u></Text></Link>
          </Flex>
        </Box>
      </Grid>
      <Footer />
    </main>
  )
}
export default NotFoundPage

export const Head = () => <title>404: Amy Lo</title>
