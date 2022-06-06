import { useRef } from "react";

import { Button, Input, Group, Box } from "@mantine/core";

const sendFormData = async (updatedGymData) => {
  const gymId = updatedGymData._id;
  const response = await fetch(`/api/gyms/${gymId}`, {
    method: "PUT",
    body: JSON.stringify(updatedGymData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }
};

export default function AdminWallForm(props) {
  const enteredName = useRef();
  const enteredImage = useRef();

  const gym = props.items;

  const wallArray = gym.walls;

  async function submitHandler(event) {
    event.preventDefault();

    const newWall = {
      id: gym.walls.length,
      name: enteredName.current.value,
      image: enteredImage.current.value,
      routes: [],
    };
    validateFormInformation(newWall);

    wallArray.push(newWall);

    try {
      await sendFormData(gym);
    } catch (error) {
      //TODO set error handling here
    }

    enteredImage.current.value = "";
    enteredName.current.value = "";
  }

  return (
    <>
      <Box sx={{ maxWidth: 300 }} mx="auto">
        <h3>Add a wall to {`${gym.name}`}</h3>
        <form onSubmit={submitHandler}>
          <div>
            <label>Name: </label>
            <Input input="text" ref={enteredName} />
          </div>
          <div>
            <label>Image: </label>
            <Input input="text" ref={enteredImage} />
          </div>
          <Group position="right" mt="md">
            <Button type="submit">Add</Button>
          </Group>
        </form>
      </Box>
    </>
  );
}

function validateFormInformation(wallData) {
  const { name, image } = wallData;
  if (!name || !image) {
    throw new Error({ message: "wrong format!" });
  }
}
