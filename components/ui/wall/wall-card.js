import {
  Card,
  Image,
  Text,
  Button,
  Group,
  useMantineTheme,
  Box,
} from "@mantine/core";

export default function WallCard(props) {
  const { id, name, image, gymId } = props;
  const theme = useMantineTheme();

  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];

  return (
    <>
      <Card
        shadow="sm"
        p="lg"
        component="a"
        href={`/${gymId}/${id}`}
        style={{ marginBottom: 20 }}
      >
        <Card.Section>
          <Text align="center" weight={500} size="lg">
            Go to the {`${name}`} wall
          </Text>
          <Image src={image} alt={id} fit="contain" />
        </Card.Section>
      </Card>
    </>
  );
}
