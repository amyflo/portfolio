import * as React from "react"
import "../styles/styles.css"
import { Heading, Text, Grid, Divider, Progress, Image, Badge, Box, Flex, NavLink, Card, Container } from "theme-ui"
import puzzle from "../images/puzzle.gif"

const paragraphs = [
  "Wherever there’s an interesting problem to solve, I’ll go – whether that means deciphering complex algorithms, painting a North Star vision, or imagining end-to-end user experiences.",
  "I pull inspiration from an unconventional background in game design, neuroscience, and engineering. I know what it takes to put the pieces together. I thrive building scrappy and building at scale.",
  "I’m passionate about grounding my work in the psychology of everyday people. I currently help teach graduate-level classes on game design and designing for behavior change at Stanford University."
];

const email = 'amyflo@stanford.edu';
const linkedin = 'https://linkedin.com/in/amyflo';
const resume = 'https://drive.google.com/file/d/1gd2ReAsK08T-LJYuzyq6NZ4qYhV4EEkU/view?usp=sharing'
const data = [
  {
    id: 1,
    image: 'https://placekitten.com/300/200', // Replace with your image URLs
    heading: 'Record',
    year: '2023',
    link: 'https://web.stanford.edu/class/cs147/projects/HarmoniousTies/record/',
    tools: 'React Native, Expo, Figma, API',
    type: 'UX/UI, Mobile',
    subheading: 'Mobile journalling app for analyzing your emotions musically.',
  },
  {
    id: 2,
    image: 'https://placekitten.com/300/202',
    heading: 'SpaceBoi vs. The World',
    year: '2023',
    link: 'https://amyflo.itch.io/spaceboi',
    tools: 'Unity, Figma, Adobe Creative Cloud',
    type: 'Game, UX/UI',
    subheading: 'New onboarding, level system, and system feedback UI for a game about saving the planet.',
  },
  {
    id: 3,
    image: 'https://placekitten.com/300/202',
    heading: 'Pixel Vessel',
    year: '2023',
    link: 'https://amyflo.medium.com/pixel-vessel-cs476a-hw-2-sound-peeking-34d537d4ea5e',
    tools: 'ChucK, ChuGL',
    type: 'Tool, Visual Effects, Interactive',
    subheading: 'Audiovisualizer mapping the time-domain waveform and waterfall magnitude in chaotic zen.',
  },
];

const IndexPage = () => {


  return (
    <main>
      <Container sx={{ p: ['4', '5'] }} bg="muted">

        <Box sx={{ justifyContent: 'center', alignSelf: 'center', }}>
          <Heading px={2} as="h2">Amy Lo</Heading>
          <Flex as="nav" sx={{ alignItems: 'left', flexDirection: ['column', 'row'] }}>

            <a target="_blank" href={"mailto:" + { email }}>
              <Text sx={navLinkStyles} as="h3" px="2">Email</Text>
            </a>

            <a target="_blank" href={linkedin}>
              <Text sx={navLinkStyles} as="h3" px="2">LinkedIn</Text>
            </a>

            <a target="_blank" href={resume}>
              <Text sx={navLinkStyles} as="h3" px="2">Resume</Text>
            </a>
          </Flex>
        </Box>

        <Box sx={{ mr: ['2', '2', '6'], px: '2' , pr: ['0', '0', '6'], pt: ['5'] }}>
          <img width="100" height="100" src={puzzle} alt="puzzle" />
          <Heading py={3} as='h1'>I love a good puzzle.</Heading>
          {paragraphs.map((paragraph) => (
            <Heading  py={3} as='h2'>{paragraph}</Heading>
          ))}
          <Text>🚧 This site is under construction! Come back in 2024 for updates. 🚧</Text>
        </Box>
      </Container>
      <Container sx={{ p: ['4', '5'] }} >
        <Heading>Selected Work</Heading>
        <Divider />
        <Grid pt={4} gap={5} columns={[1, 2, 3]}>
          {data.map((item) => (
            <a href={item.link} target="_blank">
              <Card key={item.id} sx={cardStyles}>
                {/* <Image src={item.image} alt={`Image for ${item.heading}`} sx={imageStyles} /> */}
                <div sx={contentStyles}>
                  <Heading as="h3" sx={headingStyles}>
                    {item.heading}
                  </Heading>
                  <Heading sx={tagsStyles}>{item.type} • {item.tools}</Heading>
                  <Text sx={subheadingStyles}>{item.subheading}</Text>
                </div>
              </Card>
            </a>
          ))}
        </Grid>
      </Container>
    </main>
  )
}

const cardStyles = {
  borderRadius: 'default',
  boxShadow: 'default',
  overflow: 'hidden',
  position: 'relative',
  transition: 'transform 0.2s',
  ':hover': {
    transform: 'scale(1.05)',
  },
};

const navLinkStyles =  {
  ':hover': {
    transform: 'scale(1.05)',
    textDecoration: 'underline'
  },
}

const imageStyles = {
  width: '100%',
  height: 'auto',
};

const contentStyles = {
  padding: 3,
};

const tagsStyles = {
  fontSize: 2,
  color: 'primary',
  mb: 3,
};

const headingStyles = {
  fontSize: 4,
  my: 2,
};

const subheadingStyles = {
  fontSize: 2,
  color: 'textMuted',
};

export default IndexPage

export const Head = () => <title>Amy Lo</title>
