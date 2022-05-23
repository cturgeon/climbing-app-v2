import {
  Card,
  Image,
  Text,
  Button,
  Group,
  useMantineTheme,
  Grid,
} from "@mantine/core";

import ClimbCommentsModal from "./climb-comments-modal";
import ClimbLogModal from "./climb-log-modal";

// props from ClimbItem <- ClimbList <-[wallId]
export default function ClimbCard(props) {
  const { id, name, grade, description, image, color } = props;
  const theme = useMantineTheme();

  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];

  return (
    <div style={{ width: 340, margin: "auto" }}>
      <Card shadow="sm" p="lg">
        <Card.Section>
          <Image src={image} height={160} alt={id} />
        </Card.Section>

        <Group
          position="apart"
          style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
        >
          <Text weight={500}>{name}</Text>
          <Group>
            <Text weight={500}>{color}</Text>
            <Text weight={500}>{grade}</Text>
          </Group>
        </Group>

        <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
          {description}
        </Text>

        <Grid justify="space-between">
          <ClimbCommentsModal items={props} />
          <ClimbLogModal items={props} />
        </Grid>
      </Card>
    </div>
  );
}
