import { useState } from "react";
import { Modal, Button, Group, Text, Grid, Title } from "@mantine/core";

// props from ClimbCard <- ClimbItem <- ClimbList <- [wallId]
export default function ClimbLogModal(props) {
  const [opened, setOpened] = useState(false);
  const [attempts, setAttempts] = useState(0);

  const { id, name, grade, description, image, color } = props.items;

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

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Log your climb"
      >
        {
          <div>
            <form>
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
              <Text>Attempts: {attempts === 0 ? "Flash" : attempts}</Text>
              <Button color="teal" type="button" onClick={increaseAttempts}>
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
            </form>
            <Grid justify="space-between">
              <Button
                variant="light"
                color="blue"
                style={{ marginTop: 14 }}
                onClick={clearHandler}
              >
                Clear
              </Button>
              <Button variant="light" color="blue" style={{ marginTop: 14 }}>
                Submit
              </Button>
            </Grid>
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
