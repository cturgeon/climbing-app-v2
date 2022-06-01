import { useState } from "react";

import {
  Modal,
  Button,
  Group,
  Text,
  Grid,
  Title,
  Box,
  SimpleGrid,
} from "@mantine/core";

// props from ClimbCard <- ClimbItem <- ClimbList <- [wallId]
export default function ClimbLogModal(props) {
  const [opened, setOpened] = useState(false);
  const [attempts, setAttempts] = useState(0);

  const { id, name, grade, description, image, color, wall } = props.items;

  // TODO: add session tracker, change button for submit depending session

  function increaseAttempts() {
    setAttempts(++attempts);
  }
  function decreaseAttempts() {
    if (attempts > 0) {
      setAttempts(--attempts);
    }
  }

  function clearHandler() {
    setAttempts(0);
  }

  async function submitHandler(event) {
    event.preventDefault();

    const logData = {
      attempts,
      grade,
      wallName: wall.name,
    };

    fetch("/api/routelog", {
      method: "POST",
      body: JSON.stringify(logData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    clearHandler();
    setOpened(false);
  }

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Log your climb"
      >
        {
          <div>
            <form onSubmit={submitHandler}>
              <Grid justify="space-between">
                <Title>{name}</Title>
                <Group>
                  <Text
                    style={{
                      marginLeft: 10,
                      display: "flex",
                      alignItems: "flex-end",
                      bottom: 0,
                    }}
                  >
                    {color}
                  </Text>
                  <Text
                    style={{
                      display: "flex",
                      alignItems: "flex-end",
                      bottom: 0,
                    }}
                  >
                    {grade}
                  </Text>
                </Group>
                <Text
                  style={{
                    marginBottom: 20,
                  }}
                >
                  {description}
                </Text>
              </Grid>
              <Text align="center">Attempts:</Text>
              <Text align="center" size="xl" weight={600}>
                {attempts === 0 ? "Flash" : attempts}
              </Text>
              <SimpleGrid>
                <Button
                  size="xl"
                  color="teal"
                  type="button"
                  onClick={increaseAttempts}
                >
                  +
                </Button>
                <Button
                  compact
                  variant="outline"
                  type="button"
                  onClick={decreaseAttempts}
                >
                  -
                </Button>
              </SimpleGrid>
              <Grid justify="space-between">
                <Button
                  variant="light"
                  color="blue"
                  style={{ marginTop: 14 }}
                  onClick={clearHandler}
                >
                  Clear
                </Button>
                <Button
                  type="submit"
                  variant="light"
                  color="blue"
                  style={{ marginTop: 14 }}
                >
                  Submit
                </Button>
              </Grid>
            </form>
          </div>
        }
      </Modal>

      <Group position="center">
        <Button
          color="blue"
          fullWidth
          style={{ marginTop: 14 }}
          onClick={() => setOpened(true)}
        >
          Log Climb
        </Button>
      </Group>
    </>
  );
}
