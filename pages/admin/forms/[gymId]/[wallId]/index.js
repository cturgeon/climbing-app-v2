import { ObjectId } from "mongodb";
import { connectToDatabase, getGymById } from "../../../../../helpers/db-util";
import { Fragment, useRef } from "react";
import { Box, Button, Group, Input, List } from "@mantine/core";
import { Circles } from "tabler-icons-react";

async function sendFormData(updatedGymData) {
  const gymId = updatedGymData._id;
  const response = await fetch(`/api/${gymId}`, {
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
}

export default function WallFormEditPage(props) {
  const wallId = props.wallId;
  const gym = props.gym;
  const gymWall = gym.walls[wallId];

  const enteredName = useRef();
  const enteredColor = useRef();
  const enteredGrade = useRef();
  const enteredDescription = useRef();
  const enteredImage = useRef();

  async function submitHandler(event) {
    event.preventDefault();

    const routeData = {
      id: gymWall.routes.length,
      name: enteredName.current.value,
      color: enteredColor.current.value,
      grade: enteredGrade.current.value,
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
    enteredColor.current.value = "";
    enteredGrade.current.value = "";
    enteredDescription.current.value = "";
    enteredImage.current.value = "";
  }

  return (
    <div>
      <Box sx={{ maxWidth: 300 }} mx="auto" style={{ marginBottom: 40 }}>
        <h2>Current routes on {gymWall.name}</h2>
        {gymWall.routes.length > 0 && (
          <Fragment>
            <List size={20} center>
              {gymWall.routes.map((route) => (
                <List.Item
                  key={route.id}
                  icon={
                    <Circles
                      size={24}
                      strokeWidth={2}
                      color={`${route.color}`}
                    />
                  }
                >
                  {route.color} {route.grade} : {route.name}
                </List.Item>
              ))}
            </List>
          </Fragment>
        )}
      </Box>
      <Box sx={{ maxWidth: 300 }} mx="auto">
        <h3>Add a route below</h3>
        <form onSubmit={submitHandler}>
          <div>
            <label>Name</label>
            <Input type="text" id="name" ref={enteredName} />
          </div>
          <div>
            <label>Color</label>
            <Input type="text" id="color" ref={enteredColor} />
          </div>
          <div>
            <label>Grade</label>
            <Input type="text" id="grade" ref={enteredGrade} />
          </div>
          <div>
            <label>Description</label>
            <Input type="text" id="description" ref={enteredDescription} />
          </div>
          <div>
            <label>Image</label>
            <Input type="text" id="image" ref={enteredImage} />
          </div>
          <Group position="right" mt="md">
            <Button type="submit">Add route</Button>
          </Group>
        </form>
      </Box>
    </div>
  );
}

export async function getServerSideProps(context) {
  const gymId = context.params.gymId;
  const wallId = context.params.wallId;
  let client;
  try {
    client = await connectToDatabase();
    const gymData = await getGymById(client, "gym-data", {
      _id: ObjectId(gymId),
    });
    client.close();
    return {
      props: {
        gym: JSON.parse(JSON.stringify(gymData)),
        wallId: wallId,
      },
    };
  } catch (error) {
    client.close();
    console.error(error);
    return;
  }
}
