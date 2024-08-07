import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { Button, Paper, Title, useMantineTheme, Text } from '@mantine/core';
import classes from './Blogs.module.scss';
import { Fade } from "react-awesome-reveal";

const data = [
  {
    image:
      'https://miro.medium.com/v2/resize:fit:720/format:webp/1*QwBR3EBHvuHwpMxLoXNdow.png',
    title: 'Web scraping using Python',
    category: 'Data Science',
    link: "https://medium.com/@dcsenadheera777/web-scraping-using-python-9c8c242bb1cf"
  },
  {
    image:
      'https://miro.medium.com/v2/resize:fit:720/format:webp/1*A7k-hScNeDCCCsWOD_gMKw.jpeg',
    title: 'Directory, File Brute-Forcing and Enumeration Using Gobuster',
    category: 'Cyber Security',
    link: "https://medium.com/@dcsenadheera777/directory-file-brute-forcing-and-enumeration-using-gobuster-8141a847f2f7"
  },
  {
    image:
      'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*MHPble8_W6QSMWRyR4wGdw.jpeg',
    title: 'Run Python script using NodeJS',
    category: 'Web Development',
    link: "https://medium.com/@dcsenadheera777/run-python-script-using-nodejs-7b15abf2e531"
  },
  {
    image:
      'https://miro.medium.com/v2/resize:fit:640/format:webp/1*_1Jr6vuxo_tYDWsB3-gSqw.png',
    title: 'Send emails using NodeJS',
    category: 'Backend Development',
    link: "https://medium.com/@dcsenadheera777/send-emails-using-nodejs-50c81285badc"
  },
  {
    image:
      'https://miro.medium.com/v2/resize:fit:720/format:webp/1*yDcUyrkW-5166tfuEe4ZZg.jpeg',
    title: 'How to add language translation feature to your React web application',
    category: 'Frontend Development',
    link: "https://medium.com/@dcsenadheera777/how-to-add-language-translation-feature-to-your-react-web-application-f28346f4fe27"
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
      style={{ background: `linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)) , url(${item.image}) center/cover no-repeat`}}
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
        <a target='_blank' href={item.link}>
        Read article
        </a>
      </Button>
    </Paper>
    </Carousel.Slide>
  ));

  return (
    <div id='blogs' className='blog-section'>
      <h3 className='sub-heading'>Blogs</h3>
      <Fade direction='right'>
      <Carousel
      withIndicators
      withControls
      slideSize={{ base: '100%', sm: '50%' }}
      slideGap={{ base: 'xl', sm: 2 }}
      align="start"
      slidesToScroll={mobile ? 1 : 2}
      loop
    >
      {slides}
    </Carousel>
    <p className='follow'>Do you want to read my future articles ?<br /> follow me on <a target='_blank' href='https://medium.com/@dcsenadheera777'>medium</a></p>
      </Fade>
    </div>
  );
}