import { useState } from "react";

import { Modal, Button, Group, Textarea } from "@mantine/core";

// props from ClimbCard <- ClimbItem <- ClimbList <- [wallId]
export default function ClimbCommentsModal(props) {
  const [opened, setOpened] = useState(false);
  const [attempts, setAttempts] = useState(0);

  const { id, name, grade, description, image } = props.items;

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Talk beta and add comments"
      >
        {
          <Textarea
            placeholder="Talk beta or add a comment"
            label="Your Comment"
            required
          />
        }
      </Modal>
      <Group position="center">
        <Button
          variant="light"
          color="teal"
          fullWidth
          style={{ marginTop: 14 }}
          onClick={() => setOpened(true)}
        >
          Comments
        </Button>
      </Group>
    </>
  );
}
