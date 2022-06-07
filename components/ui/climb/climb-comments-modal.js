import { useEffect, useRef, useState } from "react";
import { Check } from "tabler-icons-react";

import { Modal, Button, Textarea, Box } from "@mantine/core";
import { updateNotification, showNotification } from "@mantine/notifications";

// props from ClimbCard <- ClimbItem <- ClimbList <- [wallId]
export default function ClimbCommentsModal(props) {
  const [opened, setOpened] = useState(false);
  const [comments, setComments] = useState([]);
  const enteredText = useRef();

  const { id, name, grade, description, image, color } =
    props.items.items.route;

  async function submitHandler(event) {
    event.preventDefault();

    showNotification({
      id: "load-data",
      loading: true,
      title: `Loading`,
      message: "Adding your comment",
      autoClose: false,
      disallowClose: true,
    });

    try {
      const commentData = {
        comment: enteredText.current.value,
        routeId: id,
      };

      await fetch(`/api/comments/${id}`, {
        method: "POST",
        body: JSON.stringify(commentData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      fetch(`/api/comments/${id}`)
        .then((res) => res.json())
        .then((data) => setComments(data.comments));

      updateNotification({
        id: "load-data",
        icon: <Check size={18} />,
        title: `Logged your comment on ${name}`,
        message: "Thanks for adding input on this climb!",
        autoClose: 4000,
      });
    } catch (error) {
      updateNotification({
        id: "load-data",
        title: "Bummer!",
        message: "Failed to add your comment",
        color: "red",
      });
    }
    enteredText.current.value = "";
  }

  useEffect(() => {
    fetch(`/api/comments/${id}`)
      .then((res) => res.json())
      .then((data) => setComments(data.comments));
  }, []);

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
                label="Comment"
                required
                ref={enteredText}
              />
              <Button
                style={{ marginTop: 10, marginBottom: 20 }}
                fullWidth
                type="submit"
              >
                Add comment
              </Button>
            </form>
            <ul>
              {comments.map((comment) => (
                <li key={`${comment.id}`}>
                  <p>{comment.comment}</p>
                </li>
              ))}
            </ul>
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
        Comments
      </Button>
    </>
  );
}
