import { useSession } from "next-auth/react";

import { Button } from "@mantine/core";

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
          <label>Comment</label>
          <textarea></textarea>
          <button>submit</button>
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
          </>
        )}
      </>
    </>
  );
}
