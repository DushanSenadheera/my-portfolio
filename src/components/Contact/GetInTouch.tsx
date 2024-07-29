import { useState } from "react";
import {
  Paper,
  Text,
  TextInput,
  Textarea,
  Button,
  Group,
} from "@mantine/core";
import { ContactIconsList } from "./ContactIcons";
import classes from "./GetInTouch.module.scss";
import { Fade } from "react-awesome-reveal";

export function GetInTouch() {
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {

    const form = event.target as HTMLFormElement;
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(form);

    formData.append("access_key", "9f725dc9-3c04-4fbf-a07a-4de2dfdaf6e0");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      form.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <Fade direction="up">
      <Paper id="contact" shadow="md" radius="lg">
        <div className={classes.wrapper}>
          <div
            className={classes.contacts}
            style={{ backgroundColor: `var(--dark-bg-color)` }}
          >
            <Text fz="lg" fw={700} className={classes.title} c="#fff">
              Contact information
            </Text>

            <ContactIconsList />
          </div>

          <form className={classes.form} onSubmit={onSubmit}>
            <Text
              fz="lg"
              fw={700}
              className={classes.title}
              style={{ color: "#fff" }}
            >
              Get in touch
            </Text>

            <div className={classes.fields}>
              <TextInput name="name" label="Your name" placeholder="Your name" required/>

              <TextInput
                name="email"
                label="Your email"
                placeholder="email@mail.com"
                required
              />

              <Textarea
                mt="md"
                name="message"
                label="Your message"
                placeholder="Please include all relevant information"
                minRows={5}
              />

              <Group justify="flex-end" mt="md">
                <Button type="submit" className="primary-btn">
                  Send message
                </Button>
              </Group>
            </div>
            <span>{result}</span>
          </form>
        </div>
      </Paper>
    </Fade>
  );
}
