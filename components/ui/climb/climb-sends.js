import { useEffect, useState } from "react";

import { Modal, Button, List, Box } from "@mantine/core";

// props from ClimbCard <- ClimbItem <- ClimbList <- [wallId]
export default function ClimbSendModal(props) {
  const [opened, setOpened] = useState(false);
  const [climbers, setClimbers] = useState([]);

  const { id, name, grade, description, image, color } =
    props.items.items.route;
  const wall = props.items.items.wall;

  // useEffect(() => {
  //   const climberIdsByRoute = fetch("/api/routelog")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="List of crushers! 🧗"
      >
        {
          <Box>
            {climbers && (
              <>
                <List>
                  {climbers.map((climber) => {
                    <List.Item>{climber.name}</List.Item>;
                  })}
                </List>
              </>
            )}
          </Box>
        }
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
