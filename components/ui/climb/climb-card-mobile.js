import { Circles } from "tabler-icons-react";
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

export default function ClimbCardMobile(props) {
  const { id, name, grade, description, image, color } = props.items.route;
  const { wall } = props.items.wall;
  const theme = useMantineTheme();

  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];

  const buttonStyles = {
    compact: true,
  };

  return (
    <Box sx={{ maxWidth: "90%" }} mx="auto" style={{ marginBottom: 10 }}>
      <Card shadow="sm" withBorder sx={{ maxHeight: 150 }}>
        <Card.Section>
          <Grid columns={24}>
            <Grid.Col span={8}>
              <Image src={image} alt={id} />
            </Grid.Col>
            <Grid.Col span={16}>
              <Group>
                <Text weight={500}>{name}</Text>
                <Group>
                  <Circles size={18} strokeWidth={3} color={`${color}`} />
                  <Text weight={500}>{color}</Text>
                  <Text weight={500}>{`V` + grade}</Text>
                </Group>
              </Group>
              <Text size="sm">{description}</Text>
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
            </Grid.Col>
          </Grid>
        </Card.Section>
      </Card>
    </Box>
  );
}
