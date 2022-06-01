import { Fragment, useState } from "react";

import { Modal, Button, Group, Textarea, Box } from "@mantine/core";

// props from ClimbCard <- ClimbItem <- ClimbList <- [wallId]
export default function ClimbCommentsModal(props) {
  const [opened, setOpened] = useState(false);

  const { id, name, grade, description, image } = props.items;

  function submitHandler(event) {
    event.preventDefault();

    const commentData = {
      comment: "",
    };

    showNotification({
      icon: <Check size={18} />,
      title: `You sent ${name}`,
      message: "We logged your climb. Keep crushing! ",
      autoClose: 4000,
    });
  }

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Talk beta and add comments"
      >
        {
          <Box>
            <form onSubmit={submitHandler}>
              <Textarea
                placeholder="Talk beta or add a comment"
                label="Your Comment"
                required
              />
              <Button type="submit">Add comment</Button>
            </form>
          </Box>
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
