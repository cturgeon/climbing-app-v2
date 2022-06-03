import { Fragment, useState } from "react";

import { Modal, Button, Group, Textarea, Box } from "@mantine/core";
import { Check } from "tabler-icons-react";

// props from ClimbCard <- ClimbItem <- ClimbList <- [wallId]
export default function ClimbSendModal(props) {
  const [opened, setOpened] = useState(false);

  const { id, name, grade, description, image } = props.items;

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="List of crushers!"
      >
        {
          <Box>
            <Text> Name 🧗</Text>
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
