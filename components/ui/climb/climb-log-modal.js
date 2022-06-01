import { useState } from "react";
import { useSession } from "next-auth/react";

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
import { showNotification, updateNotification } from "@mantine/notifications";
import { Check } from "tabler-icons-react";

// props from ClimbCard <- ClimbItem <- ClimbList <- [wallId]
export default function ClimbLogModal(props) {
  const [opened, setOpened] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const { data: session } = useSession();

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
    showNotification({
      id: "load-data",
      loading: true,
      title: `Loading`,
      message: "Adding your climb",
      autoClose: false,
      disallowClose: true,
    });

    try {
      const logData = {
        attempts,
        grade,
        wallName: wall.name,
      };

      await fetch("/api/routelog", {
        method: "POST",
        body: JSON.stringify(logData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      updateNotification({
        id: "load-data",
        icon: <Check size={18} />,
        title: `You sent ${name}`,
        message: "We logged your climb. Keep crushing! ",
        autoClose: 4000,
      });
      clearHandler();
      setOpened(false);
    } catch (error) {
      updateNotification({
        id: "load-data",
        title: "Bummer!",
        message: "Failed to add your climb",
        color: "red",
      });
    }
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
          disabled={!session}
        >
          Log Climb
        </Button>
      </Group>
    </>
  );
}
