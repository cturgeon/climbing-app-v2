import { Circles } from "tabler-icons-react";
import { Card, Text, Group, Grid, Box } from "@mantine/core";

import ClimbCommentsModal from "./climb-comments-modal";
import ClimbLogModal from "./climb-log-modal";
import ClimbSendModal from "./climb-sends";
import MobileImageModal from "./mobile-image";

export default function ClimbCardMobile(props) {
  const { id, name, grade, description, image, color } = props.items.route;
  const { wall } = props.items.wall;

  return (
    <Box
      sx={{ maxHeight: 150, minWidth: "90%" }}
      mx="auto"
      style={{ marginBottom: 10 }}
    >
      <Card shadow="sm" withBorder sx={{ height: 150 }}>
        <Card.Section>
          <Grid columns={24}>
            <Grid.Col span={8} p={0}>
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
