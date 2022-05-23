import { Button, Box, Input, Group } from "@mantine/core";
import { useRef } from "react";

async function sendFormData(newGymData) {
  const response = await fetch("/api/gymData", {
    method: "POST",
    body: JSON.stringify(newGymData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }
}

export default function GymFormPage() {
  const enteredGymName = useRef();
  const enteredGymAddress = useRef();
  const enteredGymDesciption = useRef();
  const enteredGymImage = useRef();

  async function submitHandler(event) {
    event.preventDefault();

    const newGymData = {
      name: enteredGymName.current.value,
      address: enteredGymAddress.current.value,
      description: enteredGymDesciption.current.value,
      image: enteredGymImage.current.value,
    };
    validateFormInformation(newGymData);

    try {
      await sendFormData(newGymData);
    } catch (error) {
      //TODO set error handling
    }

    enteredGymName.current.value = "";
    enteredGymAddress.current.value = "";
    enteredGymDesciption.current.value = "";
    enteredGymImage.current.value = "";
  }

  return (
    <Box sx={{ maxWidth: 300 }} mx="auto" style={{ marginBottom: 40 }}>
      <h2>Add a new gym below</h2>
      <form onSubmit={submitHandler}>
        <div>
          <label required>Name </label>
          <Input type="text" name="name" ref={enteredGymName} />
        </div>
        <div>
          <label required>Address </label>
          <Input type="text" name="address" ref={enteredGymAddress} />
        </div>
        <div>
          <label required>Description </label>
          <Input
            type="textarea"
            name="description"
            ref={enteredGymDesciption}
          />
        </div>
        <div>
          <label required>Image</label>
          <Input type="text" name="image" ref={enteredGymImage} />
        </div>
        <Group position="right" mt="md">
          <Button type="submit">Add</Button>
        </Group>
      </form>
    </Box>
  );
}

function validateFormInformation(gymData) {
  const { name, address, description, image } = gymData;
  if (!name || !address || !description || !image) {
    console.log("missing data");
  }
}
