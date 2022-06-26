import { useRef } from "react";
import { useSession } from "next-auth/react";
import { Check } from "tabler-icons-react";

import { Button, Group, Text } from "@mantine/core";

import dynamic from "next/dynamic";
const HomeGymSettings = dynamic(() =>
  import("../../components/settings/home-gym")
);

import { showNotification, updateNotification } from "@mantine/notifications";

export default function UserSettingsPage() {
  const { data: session } = useSession();
  const commentData = useRef();

  function submitHandler(event) {
    event.preventDefault();

    showNotification({
      id: "load-data",
      loading: true,
      title: `Loading`,
      message: "Sending your comment to our admins",
      autoClose: false,
      disallowClose: true,
    });

    try {
      const comment = {
        comment: commentData.current.value,
        user: session?.user.id,
      };

      fetch("/api/admin/feedback", {
        method: "POST",
        body: JSON.stringify(comment),
        headers: {
          "Content-Type": "application/json",
        },
      });

      updateNotification({
        id: "load-data",
        icon: <Check size={18} />,
        title: `Thanks for the comment`,
        message: "We appreciate the feedback!",
        autoClose: 4000,
      });
    } catch (error) {
      updateNotification({
        id: "load-data",
        title: `This is a tragedy :(`,
        message:
          "Something is wrong on our end, email casey.turgeon@gmail.com. Thanks!",
        autoClose: 4000,
        color: "red",
      });
    }

    commentData.current.value = "";
  }

  return (
    <>
      <HomeGymSettings />
      <>
        <h3>Send some feedback</h3>
        <form>
          <div>
            <label>Comment</label>
          </div>
          <Group>
            <textarea ref={commentData}></textarea>
            <Button onClick={submitHandler}>submit</Button>
          </Group>
        </form>
      </>
      <>
        {session && session.user?.email === "casey.turgeon@gmail.com" && (
          <>
            <div>
              <p></p>
            </div>
            <Button component="a" href="/admin">
              Admin Stuff
            </Button>

            <Text size="xs">
              Note: I do not own any of the images on this website, thanks!
            </Text>
          </>
        )}
      </>
    </>
  );
}
