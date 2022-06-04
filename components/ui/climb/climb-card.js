import {
  Card,
  Image,
  Text,
  Group,
  useMantineTheme,
  Grid,
  Box,
} from "@mantine/core";

import ClimbCommentsModal from "./climb-comments-modal";
import ClimbLogModal from "./climb-log-modal";
import ClimbSendModal from "./climb-sends";

// props from ClimbItem <- ClimbList <-[wallId]
export default function ClimbCard(props) {
  const { id, name, grade, description, image, color, wall } = props;
  const theme = useMantineTheme();

  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];

  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
      <Card shadow="sm" p="lg">
        <Card.Section>
          <Image src={image} alt={id} />
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

        <Grid justify="space-around">
          <div style={{ width: 110 }}>
            <ClimbCommentsModal items={props} />
          </div>
          <div style={{ width: 110 }}>
            <ClimbSendModal items={props} />
          </div>
        </Grid>
        <div align="center">
          <ClimbLogModal items={props} />
        </div>
      </Card>
    </Box>
  );
}
