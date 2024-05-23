import { Paper, Text, TextInput, Textarea, Button, Group, SimpleGrid } from '@mantine/core';
import { ContactIconsList } from './ContactIcons';
import classes from './GetInTouch.module.scss';
import { Fade } from "react-awesome-reveal";

export function GetInTouch() {
  return (
    <Fade direction='up'>
      <Paper id='contact' shadow="md" radius="lg">
      <div className={classes.wrapper}>
        <div className={classes.contacts} style={{ backgroundColor: `var(--dark-bg-color)`}}>
          <Text fz="lg" fw={700} className={classes.title} c="#fff">
            Contact information
          </Text>

          <ContactIconsList />
        </div>

        <form className={classes.form} onSubmit={(event) => event.preventDefault()}>
          <Text fz="lg" fw={700} className={classes.title} style={{color: '#fff'}}>
            Get in touch
          </Text>

          <div className={classes.fields}>
            <SimpleGrid cols={{ base: 1, sm: 2 }}>
              <TextInput label="Your name" placeholder="Your name" />
              <TextInput label="Your email" placeholder="email@mail.com" required />
            </SimpleGrid>

            <TextInput mt="md" label="Subject" placeholder="Subject" required />

            <Textarea
              mt="md"
              label="Your message"
              placeholder="Please include all relevant information"
              minRows={5}
            />

            <Group justify="flex-end" mt="md">
              <Button type="submit" className='primary-btn'>
                Send message
              </Button>
            </Group>
          </div>
        </form>
      </div>
    </Paper>
    </Fade>
  );
}