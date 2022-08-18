import { useEffect, useState } from "react";
import { Button, Grid, Select } from "@mantine/core";

export default function HomeGymSettings() {
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
