import { useRef } from "react";
import { useSession } from "next-auth/react";

import { Button, Group, Text } from "@mantine/core";

import dynamic from "next/dynamic";
const HomeGymSettings = dynamic(() =>
  import("../../components/settings/home-gym")
);

import { showNotification, updateNotification } from "@mantine/notifications";

export default function UserSettingsPage() {
  const { data: session } = useSession();
  const [setComments] = useRef();

  function submitHandler(event) {
    event.preventDefault();

    showNotification({
      title: `Error Happened :(`,
      message: "Cannot add your climb",
      autoClose: 4000,
      color: "red",
    });
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
            <textarea ref={setComments}></textarea>
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
