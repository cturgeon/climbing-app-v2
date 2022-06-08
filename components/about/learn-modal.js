import { Fragment, useState } from "react";
import { signIn } from "next-auth/react";

import {
  Modal,
  Button,
  Box,
  Text,
  Grid,
  TypographyStylesProvider,
} from "@mantine/core";

export default function LearnModal() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Welcome to Climb Logs 👋"
      >
        {
          <Box>
            <Text>
              <TypographyStylesProvider>
                <h2>Log and analyze your 🧗 progress!</h2>
                <p>
                  You can comment on climbs, see who has sent climbs, and see
                  your progress. You can also analyze yourself to learn your
                  strenghts and get a better understanding of your weaknesses by
                  getting a detailed picture of your progress.
                </p>
                <p>Sign in to get started logging your climbs</p>
              </TypographyStylesProvider>
            </Text>
            <Button onClick={() => signIn()}>Sign in</Button>
          </Box>
        }
      </Modal>
      <Fragment>
        <Grid>
          <Text>First time here?&nbsp;</Text>
          <Text>
            Learn more 👉
            <Button onClick={() => setOpened(true)} compact>
              Get Started
            </Button>
          </Text>
        </Grid>
      </Fragment>
    </>
  );
}
