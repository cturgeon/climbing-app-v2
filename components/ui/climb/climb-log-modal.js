import { useState } from "react";
import { useSession } from "next-auth/react";
import { Check, Circles } from "tabler-icons-react";

import {
  Modal,
  Button,
  Group,
  Text,
  Grid,
  Title,
  SimpleGrid,
} from "@mantine/core";
import { showNotification, updateNotification } from "@mantine/notifications";

// props from ClimbCard <- ClimbItem <- ClimbList <- [wallId]
export default function ClimbLogModal(props) {
  const [opened, setOpened] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const { data: session } = useSession();
  const { id, name, grade, description, image, color } =
    props.items.items.route;
  const wall = props.items.items.wall;

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

    if (!session) {
      showNotification({
        title: `Please log in`,
        message: "Cannot add your climb",
        autoClose: 4000,
        color: "red",
      });
      clearHandler();
      setOpened(false);
      return;
    }

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
        wall,
        routeId: id,
      };

      fetch("/api/climbs/log", {
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
    } catch (error) {
      updateNotification({
        id: "load-data",
        title: "Bummer!",
        message: "Failed to add your climb",
        color: "red",
      });
    }
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
          <>
            <form onSubmit={submitHandler}>
              <Title align="center">{name}</Title>
              <Group position="center">
                <Circles size={30} strokeWidth={3} color={`${color}`} />
              </Group>
              <Group position="center">
                <Text>{color}</Text>
                <Text>V{grade}</Text>
              </Group>
              <Text align="center" mt="xl">
                Attempts:
              </Text>
              <Text align="center" size="xl" weight={600}>
                {attempts === 0 ? "Flash" : attempts}
              </Text>
              <SimpleGrid>
                <div style={{ height: 150 }}>
                  <Button
                    color="teal"
                    type="button"
                    onClick={increaseAttempts}
                    style={{
                      width: "100%",
                      height: "100%",
                      fontSize: "50px",
                    }}
                  >
                    +
                  </Button>
                </div>
                <div style={{ marginBottom: 30 }}>
                  <Button
                    compact
                    variant="outline"
                    type="button"
                    onClick={decreaseAttempts}
                    fullWidth
                  >
                    -
                  </Button>
                </div>
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
                <Button type="submit" color="blue" style={{ marginTop: 14 }}>
                  Submit
                </Button>
              </Grid>
            </form>
          </>
        }
      </Modal>
      <Button
        color="blue"
        style={{ marginTop: 14 }}
        onClick={() => setOpened(true)}
        fullWidth
      >
        Log Climb
      </Button>
    </>
  );
}
