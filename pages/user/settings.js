import { useSession } from "next-auth/react";
import { Button } from "@mantine/core";

export default function UserSettingsPage() {
  const { data: session } = useSession();
  if (session?.user?.email === "casey.turgeon@gmail.com") {
    return (
      <>
        <div>
          <p></p>
        </div>
        <Button component="a" href="/admin">
          Admin Stuff
        </Button>
      </>
    );
  }
  return (
    <>
      Send some feedback <br />
      <form>
        <label>Comment</label>
        <textarea></textarea>
      </form>
    </>
  );
}
