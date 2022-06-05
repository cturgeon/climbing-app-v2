import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { Check } from 'tabler-icons-react';

import { Modal, Button, Group, Text, Grid, Title, SimpleGrid } from '@mantine/core';
import { showNotification, updateNotification } from '@mantine/notifications';

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
      id: 'load-data',
      loading: true,
      title: `Loading`,
      message: 'Adding your climb',
      autoClose: false,
      disallowClose: true,
    });

    try {
      const logData = {
        attempts,
        grade,
        wallName: wall.name,
      };

      fetch('/api/routelog', {
        method: 'POST',
        body: JSON.stringify(logData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      updateNotification({
        id: 'load-data',
        icon: <Check size={18} />,
        title: `You sent ${name}`,
        message: 'We logged your climb. Keep crushing! ',
        autoClose: 4000,
      });
    } catch (error) {
      updateNotification({
        id: 'load-data',
        title: 'Bummer!',
        message: 'Failed to add your climb',
        color: 'red',
      });
    }
    clearHandler();
    setOpened(false);
  }

  return (
    <>
      <Modal opened={opened} onClose={() => setOpened(false)} title="Log your climb">
        {
          <>
            <form onSubmit={submitHandler}>
              <Grid justify="space-between">
                <Title>{name}</Title>
                <Group>
                  <Text
                    style={{
                      marginLeft: 10,
                      display: 'flex',
                      alignItems: 'flex-end',
                      bottom: 0,
                    }}
                  >
                    {color}
                  </Text>
                  <Text
                    style={{
                      display: 'flex',
                      alignItems: 'flex-end',
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
                {attempts === 0 ? 'Flash' : attempts}
              </Text>
              <SimpleGrid>
                <div style={{ height: 150 }}>
                  <Button
                    color="teal"
                    type="button"
                    onClick={increaseAttempts}
                    style={{
                      width: '100%',
                      height: '100%',
                      fontSize: '50px',
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
        disabled={!session}
        fullWidth
      >
        Log Climb
      </Button>
    </>
  );
}
