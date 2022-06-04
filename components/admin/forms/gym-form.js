import { useRef } from "react";

import { Button, Input, Group } from "@mantine/core";

const sendFormData = async (newGymData) => {
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
};

export default function AdminGymForm(props) {
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
    <>
      <h2>Add a new gym below</h2>
      <form onSubmit={submitHandler}>
        <div>
          <label>Name </label>
          <Input required type="text" ref={enteredGymName} />
        </div>
        <div>
          <label>Address </label>
          <Input required type="text" ref={enteredGymAddress} />
        </div>
        <div>
          <label>Description </label>
          <Input required type="textarea" ref={enteredGymDesciption} />
        </div>
        <div>
          <label>Image</label>
          <Input required type="text" ref={enteredGymImage} />
        </div>
        <Group position="right" mt="md">
          <Button type="submit">Add</Button>
        </Group>
      </form>
    </>
  );
}

function validateFormInformation(gymData) {
  const { name, address, description, image } = gymData;
  if (!name || !address || !description || !image) {
    throw new Error({ message: "need to fill out the fields" });
  }
}
