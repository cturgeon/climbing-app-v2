import { useEffect, useState } from "react";

import { Modal, Button, List, Box } from "@mantine/core";

// props from ClimbCard <- ClimbItem <- ClimbList <- [wallId]
export default function ClimbSendModal(props) {
  const [opened, setOpened] = useState(false);
  const [climbers, setClimbers] = useState([]);

  const { id, name, grade, description, image, color } =
    props.items.items.route;
  const wall = props.items.items.wall;

  useEffect(() => {
    fetch(`/api/climbs/sends/${id}`)
      .then((res) => res.json())
      .then((data) => setClimbers(data.users));
  }, [opened]);

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="List of crushers! 🧗"
      >
        <Box>
          <List>
            {climbers?.map((climber) => (
              <List.Item key={climber.user}>{climber.user.name} </List.Item>
            ))}
          </List>
        </Box>
      </Modal>
      <Button
        color="teal"
        style={{ marginTop: 14 }}
        onClick={() => setOpened(true)}
        fullWidth
        variant="outline"
      >
        Sends
      </Button>
    </>
  );
}
