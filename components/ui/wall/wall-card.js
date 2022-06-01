import {
  Card,
  Image,
  Text,
  Button,
  Group,
  useMantineTheme,
} from "@mantine/core";

export default function WallCard(props) {
  const { id, name, image, gymId } = props;
  const theme = useMantineTheme();

  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];

  return (
    <div styles={{}}>
      <Card shadow="sm" p="lg">
        <Card.Section>
          {/* TODO change after adding my own images */}
          <Image src={image} height={200} alt={id} />
        </Card.Section>
        <Button
          variant="light"
          color="blue"
          fullWidth
          style={{ marginTop: 14 }}
          component="a"
          href={`/${gymId}/${id}`}
        >
          Go to {`${name}`}
        </Button>
      </Card>
    </div>
  );
}
