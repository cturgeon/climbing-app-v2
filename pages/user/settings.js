import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

import { Button, Select } from "@mantine/core";

export default function UserSettingsPage() {
  const { data: session } = useSession();
  const [gym, setGym] = useState();
  const [gymData, setGymData] = useState();

  function submitHandler(event) {
    event.preventDefault();
    fetch("/api/homeGym", {
      method: "POST",
      body: JSON.stringify(gym),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setGym(null);
  }

  useEffect(() => {
    fetch("/api/gymData")
      .then((res) => res.json())
      .then((data) => setGymData(data.gymData));
  }, []);

  if (!gymData) {
    return null;
  }

  const selectData = [];
  gymData.forEach((gym) =>
    selectData.push({ value: `${gym._id}`, label: `${gym.name}` })
  );

  return (
    <>
      {gymData && (
        <>
          <h2>Set home gym</h2>
          <form onSubmit={submitHandler}>
            <label>Select Gym</label>
            <Select
              required
              value={gym}
              onChange={setGym}
              data={selectData}
            ></Select>
            <Button type="submit">Set Gym</Button>
          </form>
        </>
      )}

      <>
        <h3>Send some feedback</h3>
        <form>
          <label>Comment</label>
          <textarea></textarea>
          <button>submit</button>
        </form>
      </>
      <>
        {session?.user?.email === "casey.turgeon@gmail.com" && (
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
