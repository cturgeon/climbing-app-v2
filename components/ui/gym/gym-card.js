import { Card, Text, useMantineTheme } from "@mantine/core";
import Image from "next/image";

export default function GymCard(props) {
  const { id, name, image, description } = props.items;
  const theme = useMantineTheme();

  return (
    <>
      <div style={{ maxWidth: 700, margin: "auto", paddingBottom: 50 }}>
        <Card shadow="sm" component="a" href={`/${id}`}>
          <div
            style={{
              position: "relative",
              width: "100%",
              paddingBottom: "auto",
            }}
          >
            <Image src={image} alt={id} layout="fill" />
          </div>
          <Card.Section></Card.Section>
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
      </div>
    </>
  );
}
