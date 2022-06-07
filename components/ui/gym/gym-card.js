import {
  Card,
  Image,
  Text,
  Button,
  Group,
  useMantineTheme,
  Grid,
} from "@mantine/core";

export default function GymCard(props) {
  const { id, name, image, description } = props.items;
  const theme = useMantineTheme();

  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];

  return (
    <>
      <Card shadow="sm" p="lg" component="a" href={`/${id}`}>
        <Card.Section>
          <Image src={image} alt={id} />
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
