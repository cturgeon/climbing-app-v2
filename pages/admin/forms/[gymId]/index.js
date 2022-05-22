import { connectToDatabase, getGymById } from "../../../../helpers/db-util";
import { ObjectId } from "mongodb";
import { Fragment, useRef } from "react";
import { Button } from "@mantine/core";

async function sendFormData(updatedGymData) {
  const gymId = updatedGymData._id;
  console.log(gymId);
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
      <form onSubmit={submitHandler}>
        <label>name: </label>
        <input input="text" ref={enteredName}></input>
        <label>image: </label>
        <input input="text" ref={enteredImage}></input>
        <Button type="submit">Add</Button>
      </form>
      {gym.walls.length > 0 && (
        <Fragment>
          <h3>Edit a wall below</h3>
          <ul>
            {gym.walls.map((wall) => (
              <li key={wall.id}>
                <p>{wall.name}</p>
                <Button
                  component="a"
                  href={`/admin/forms/${gym._id}/${wall.id}`}
                >
                  edit {`${wall.name}`}
                </Button>
              </li>
            ))}
          </ul>
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
