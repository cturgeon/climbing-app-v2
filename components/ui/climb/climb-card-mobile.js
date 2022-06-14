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
import MobileImageModal from "./mobile-image";

export default function ClimbCardMobile(props) {
  const { id, name, grade, description, image, color } = props.items.route;
  const { wall } = props.items.wall;
  const theme = useMantineTheme();

  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];

  return (
    <Box
      sx={{ maxWidth: "90%", minHeight: 150 }}
      mx="auto"
      style={{ marginBottom: 10 }}
    >
      <Card shadow="sm" withBorder>
        <Card.Section>
          <Grid columns={24}>
            <Grid.Col span={8}>
              <Card.Section>
                <MobileImageModal items={{ image, id }} />
              </Card.Section>
            </Grid.Col>
            <Grid.Col span={16}>
              <Group position="center">
                <Circles size={18} strokeWidth={3} color={`${color}`} />
                <Text weight={500}>{`V` + grade}</Text>
              </Group>
              <Group position="center">
                <Text lineClamp={1} weight={500}>
                  {name}
                </Text>
              </Group>
              <Grid sx={{ width: "80%" }} justify="space-around" mx="auto">
                <div>
                  <ClimbCommentsModal mobileStyles items={props} />
                </div>
                <div>
                  <ClimbSendModal mobileStyles items={props} />
                </div>
              </Grid>
              <Grid sx={{ width: "80%" }} mx="auto">
                <ClimbLogModal mobileStyles items={props} />
              </Grid>
            </Grid.Col>
          </Grid>
        </Card.Section>
      </Card>
    </Box>
  );
}
