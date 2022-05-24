import { Fragment, useState } from "react";

import { Modal, Button, Group, Textarea, List } from "@mantine/core";

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
          <Fragment>
            <Textarea
              placeholder="Talk beta or add a comment"
              label="Your Comment"
              required
            />
            <List>
              <h4>People who have sent this climb!</h4>
              <List.Item>PersonX : Y attempts</List.Item>
              <List.Item>PersonI : J attempts</List.Item>
            </List>
          </Fragment>
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
