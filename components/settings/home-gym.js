import { useEffect, useState } from "react";
import { Button, Grid, Select } from "@mantine/core";

import { showNotification, updateNotification } from "@mantine/notifications";

export default function HomeGymSettings() {
  const [gym, setGym] = useState();
  const [gymData, setGymData] = useState();

  async function submitHandler(event) {
    event.preventDefault();

    showNotification({
      id: "load-data",
      loading: true,
      title: `Loading`,
      message: "Sending your comment to our admins",
      autoClose: false,
      disallowClose: true,
    });

    await fetch("/api/homeGym", {
      method: "POST",
      body: JSON.stringify(gym),
      headers: {
        "Content-Type": "application/json",
      },
    });
    updateNotification({
      id: "load-data",
      title: "Saved",
      message: "Your home gym preference has been saved!",
      autoClose: 4000,
    });
    setGym(null);
  }

  useEffect(() => {
    fetch("/api/gyms")
      .then((res) => res.json())
      .then((data) => setGymData(data.gyms));
  }, []);

  if (!gymData) {
    return null;
  }

  const selectData = [];
  gymData.forEach((gym) =>
    selectData.push({ value: `${gym.id}`, label: `${gym.name}` })
  );
  return (
    <>
      <h2>Set home gym</h2>
      <Grid columns={24}>
        <Grid.Col span={12}>
          <Select
            required
            value={gym}
            onChange={setGym}
            data={selectData}
          ></Select>
        </Grid.Col>
        <Grid.Col span={12}>
          <Button onClick={submitHandler} type="submit">
            Set Gym
          </Button>
        </Grid.Col>
      </Grid>
    </>
  );
}
