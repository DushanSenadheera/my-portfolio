import { Text, Card, SimpleGrid, Container, rem } from "@mantine/core";
import { IconGauge, IconUser, IconCookie } from "@tabler/icons-react";
import classes from "./Services.module.scss";

const mockdata = [
  {
    title: "Web Development",
    description:
      "Effiecient and scalable web application development with the latest technologies for your business needs",
    icon: IconGauge,
  },
  {
    title: "UI/UX Design",
    description:
      "Design user centric visually apealing interfaces for your software needs",
    icon: IconUser,
  },
  {
    title: "Mobile App Development",
    description:
      "Cross platform mobile application development for both Android and iOS platforms",
    icon: IconCookie,
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
      <feature.icon
        style={{ width: rem(50), height: rem(50) }}
        stroke={2}
        color={"white"}
      />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <div>
      <h3 className="sub-heading">Services</h3>
      <Container size="lg" py="xl">
        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
          {features}
        </SimpleGrid>
      </Container>
    </div>
  );
}
