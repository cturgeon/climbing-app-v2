import { useSession } from "next-auth/react";

import { Button, Text } from "@mantine/core";

import dynamic from "next/dynamic";
const HomeGymSettings = dynamic(() =>
  import("../../components/settings/home-gym")
);

export default function UserSettingsPage() {
  const { data: session } = useSession();

  return (
    <>
      <HomeGymSettings />
      <>
        <h3>Send some feedback</h3>
        <form>
          <div>
            <label>Comment</label>
          </div>
          <div>
            <textarea></textarea>
          </div>
          <Button>submit</Button>
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
