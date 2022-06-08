import { useRef, useState } from "react";

import { Button, Group, Input, Select, Box } from "@mantine/core";

const sendFormData = async (wall, route) => {
  const gymId = wall.gymId;
  const wallId = wall.id;

  const dataToBeAdded = { wall, route };

  const response = await fetch(`/api/gyms/${gymId}/${wallId}`, {
    method: "POST",
    body: JSON.stringify(dataToBeAdded),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }
};

export default function AdminRouteForm(props) {
  const wall = props.items;

  const enteredName = useRef();
  const [gradeValue, setGradeValue] = useState();
  const [colorValue, setColorValue] = useState();
  const enteredDescription = useRef();
  const enteredImage = useRef();

  async function submitHandler(event) {
    event.preventDefault();

    const routeData = {
      name: enteredName.current.value,
      color: colorValue,
      grade: gradeValue,
      description: enteredDescription.current.value,
      image: enteredImage.current.value,
    };

    try {
      await sendFormData(wall, routeData);
    } catch (error) {
      //TODO set error handling here
    }

    enteredName.current.value = "";
    enteredDescription.current.value = "";
    enteredImage.current.value = "";
  }
  return (
    <>
      <Box sx={{ maxWidth: 300 }} mx="auto">
        <h3>Add a route below</h3>
        <form onSubmit={submitHandler}>
          <div>
            <label>Name</label>
            <Input required type="text" ref={enteredName} />
          </div>
          <div>
            <label>Color</label>
            <Select
              required
              value={colorValue}
              onChange={setColorValue}
              data={[
                { value: "Red", label: "Red" },
                { value: "Yellow", label: "Yellow" },
                { value: "Black", label: "Black" },
                { value: "Blue", label: "Blue" },
                { value: "Purple", label: "Purple" },
                { value: "Brown", label: "Brown" },
                { value: "Orage", label: "Orage" },
                { value: "Green", label: "Green" },
                { value: "Gray", label: "Gray" },
                { value: "White", label: "White" },
              ]}
            />
          </div>

          <div>
            <label>Grade</label>
            <Select
              required
              value={gradeValue}
              onChange={setGradeValue}
              data={[
                { value: "0", label: "V0" },
                { value: "1", label: "V1" },
                { value: "2", label: "V2" },
                { value: "3", label: "V3" },
                { value: "4", label: "V4" },
                { value: "5", label: "V5" },
                { value: "6", label: "V6" },
                { value: "7", label: "V7" },
                { value: "8", label: "V8" },
                { value: "9", label: "V9" },
                { value: "10", label: "V10" },
              ]}
            />
          </div>
          <div>
            <label>Description</label>
            <Input required type="text" ref={enteredDescription} />
          </div>
          <div>
            <label>Image</label>
            <Input required type="text" ref={enteredImage} />
          </div>
          <Group position="right" mt="md">
            <Button type="submit">Add route</Button>
          </Group>
        </form>
      </Box>
    </>
  );
}
