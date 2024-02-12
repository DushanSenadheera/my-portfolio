import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { Button, Paper, Title, useMantineTheme, Text } from '@mantine/core';
import classes from './Blogs.module.css';

const data = [
  {
    image:
      'https://miro.medium.com/v2/resize:fit:720/format:webp/1*A7k-hScNeDCCCsWOD_gMKw.jpeg',
    title: 'Directory, File Brute-Forcing and Enumeration Using Gobuster',
    category: 'Cyber Security',
  },
  {
    image:
      'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*MHPble8_W6QSMWRyR4wGdw.jpeg',
    title: 'Run Python script using NodeJS',
    category: 'Web Development',
  },
  {
    image:
      'https://miro.medium.com/v2/resize:fit:640/format:webp/1*_1Jr6vuxo_tYDWsB3-gSqw.png',
    title: 'Send emails using NodeJS',
    category: 'Web Development',
  },
  {
    image:
      'https://miro.medium.com/v2/resize:fit:720/format:webp/1*yDcUyrkW-5166tfuEe4ZZg.jpeg',
    title: 'How to add language translation feature to your React web application',
    category: 'Web Development',
  }
];

export default function Blogs() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Paper
      shadow="md"
      p="xl"
      radius="md"
      style={{ background: `linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)) , url(${item.image})`}}
      className={classes.card}
    >
      <div className={classes.test}>
        <Text className={classes.category} size="xs">
          {item.category}
        </Text>
        <Title order={3} className={classes.title}>
          {item.title}
        </Title>
      </div>
      <Button variant="white" color="dark">
        Read article
      </Button>
    </Paper>
    </Carousel.Slide>
  ));

  return (
    <div className='blog-section'>
      <h3 className='sub-heading'>Blogs</h3>
      <Carousel
      slideSize={{ base: '100%', sm: '50%' }}
      slideGap={{ base: 'xl', sm: 2 }}
      align="start"
      slidesToScroll={mobile ? 1 : 2}
    >
      {slides}
    </Carousel>
    </div>
  );
}