import { Text, Card, SimpleGrid, Container } from "@mantine/core";
import dev from "../../assets/dev.gif";
import ui from "../../assets/ui.webp";
import mobile from "../../assets/mobile.webp";
import classes from "./Services.module.scss";

const mockdata = [
  {
    title: "Web Development",
    description:
      "Effiecient and scalable web application development with the latest technologies for your business needs",
    icon: dev,
  },
  {
    title: "UI/UX Design",
    description:
      "Design user centric visually apealing interfaces for your software needs",
    icon: ui,
  },
  {
    title: "Mobile App Development",
    description:
      "Cross platform mobile application development for both Android and iOS platforms",
    icon: mobile,
  },
];

export default function Services() {
  const features = mockdata.map((feature) => (
    <Card
      key={feature.title}
      shadow="md"
      radius="md"
      className={classes.card}
      padding="xl"
    >
      <img src={feature.icon} width='50rem' height='50rem' alt="service icon" />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
      <Container size="lg" py="xl">
      <h3 id="services" className="sub-heading">Services</h3>
        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
          {features}
        </SimpleGrid>
      </Container>
  );
}
