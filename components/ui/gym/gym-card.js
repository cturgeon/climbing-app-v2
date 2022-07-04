import { Card, Text, useMantineTheme } from "@mantine/core";
import Image from "next/image";

export default function GymCard(props) {
  const { id, name, image, description } = props.items;
  const theme = useMantineTheme();

  return (
    <>
      <Card shadow="sm" p="lg" component="a" href={`/${id}`}>
        <Card.Section>
          <Image src={image} alt={id} layout="fill" />
        </Card.Section>
        <Text
          align="center"
          weight={500}
          style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
        >
          {name}
        </Text>
        <Text align="center" weight={300}>
          {description}
        </Text>
      </Card>
    </>
  );
}
