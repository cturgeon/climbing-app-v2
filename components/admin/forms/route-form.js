import { useRef, useState } from "react";

import { Button, Group, Input, Select, Box } from "@mantine/core";

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

export default function AdminRouteForm(props) {
  const { gym, gymWall } = props.items;

  const enteredName = useRef();
  const [gradeValue, setGradeValue] = useState();
  const [colorValue, setColorValue] = useState();
  const enteredDescription = useRef();
  const enteredImage = useRef();

  async function submitHandler(event) {
    event.preventDefault();

    const routeData = {
      id: gymWall.routes.length,
      name: enteredName.current.value,
      color: colorValue,
      grade: gradeValue,
      description: enteredDescription.current.value,
      image: enteredImage.current.value,
    };

    gymWall.routes.push(routeData);

    try {
      await sendFormData(gym);
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
                { value: "V0", label: "V0" },
                { value: "V1", label: "V1" },
                { value: "V2", label: "V2" },
                { value: "V3", label: "V3" },
                { value: "V4", label: "V4" },
                { value: "V5", label: "V5" },
                { value: "V6", label: "V6" },
                { value: "V7", label: "V7" },
                { value: "V8", label: "V8" },
                { value: "V9", label: "V9" },
                { value: "V10", label: "V10" },
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
