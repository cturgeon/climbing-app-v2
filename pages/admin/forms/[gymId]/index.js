import { connectToDatabase, getGymById } from "../../../../helpers/db-util";
import { ObjectId } from "mongodb";
import { useRef } from "react";
import { Button } from "@mantine/core";

async function sendFormData(newGymData) {
  const { gymId, name, image } = newGymData;

  const response = await fetch(`/api/${gymId}/wallData`, {
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

export default function WallForm(props) {
  const enteredName = useRef();
  const enteredImage = useRef();

  const gym = props.gym;
  if (!gym) {
    return <p>Loading....</p>;
  }

  async function submitHandler(event) {
    event.preventDefault();

    const newWall = {
      id: props.gymId,
      name: enteredName.current.value,
      image: enteredImage.current.value,
    };

    validateFormInformation(newWall);

    try {
      await sendFormData(newWall);
    } catch (error) {
      //TODO set error handling here
    }
  }

  return (
    <div>
      <h3>Add a wall to {`${gym.name}`}</h3>
      <form>
        <label>name: </label>
        <input input="text" ref={enteredName}></input>
        <label>image: </label>
        <input input="text" ref={enteredImage}></input>
        <Button onSubmit={submitHandler}>Add</Button>
      </form>
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
