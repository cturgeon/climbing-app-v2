import { connectToDatabase, getGymById } from "../../../../helpers/db-util";
import { ObjectId } from "mongodb";
import { Fragment, useRef } from "react";
import { Button, Box, Input, Group, List, ThemeIcon } from "@mantine/core";
import { Wall } from "tabler-icons-react";

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

export default function WallForm(props) {
  const enteredName = useRef();
  const enteredImage = useRef();

  const gym = props.gym;
  if (!gym) {
    return <p>Loading....</p>;
  }

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
    <div>
      <h3>Add a wall to {`${gym.name}`}</h3>
      <Box sx={{ maxWidth: 300 }}>
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
      {gym.walls.length > 0 && (
        <Fragment>
          <h3>Edit a wall below</h3>
          <List spacing={5} style={{ "list-style": "none" }}>
            {gym.walls.map((wall) => (
              <List.Item key={wall.id}>
                <Button
                  leftIcon={<Wall size={24} strokeWidth={1} color={"black"} />}
                  variant="light"
                  component="a"
                  href={`/admin/forms/${gym._id}/${wall.id}`}
                >
                  {`${wall.name}`}
                </Button>
              </List.Item>
            ))}
          </List>
        </Fragment>
      )}
    </div>
  );
}

export async function getServerSideProps(context) {
  const gymId = context.params.gymId;
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
      },
    };
  } catch (error) {
    client.close();
    console.error(error);
    return;
  }
}

function validateFormInformation(wallData) {
  const { name, image } = wallData;
  if (!name || !image) {
    console.log("missing data");
  }
}
