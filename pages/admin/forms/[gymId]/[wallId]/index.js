import { ObjectId } from "mongodb";
import { connectToDatabase, getGymById } from "../../../../../helpers/db-util";
import { Fragment, useRef } from "react";
import { Button } from "@mantine/core";

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
      <h1>Edit {gymWall.name}</h1>
      {gymWall.routes.length > 0 && (
        <Fragment>
          <h2>current wall routes</h2>
          <ul>
            {gymWall.routes.map((route) => (
              <li key={route.id}>
                <p>{route.name}</p>
              </li>
            ))}
          </ul>
        </Fragment>
      )}
      <h3>Add a route below</h3>
      <form onSubmit={submitHandler}>
        <div>
          <label>name</label>
          <input type="text" id="name" ref={enteredName} />
        </div>
        <div>
          <label>color</label>
          <input type="text" id="color" ref={enteredColor} />
        </div>
        <div>
          <label>grade</label>
          <input type="text" id="grade" ref={enteredGrade} />
        </div>
        <div>
          <label>description</label>
          <input type="text" id="description" ref={enteredDescription} />
        </div>
        <div>
          <label>image</label>
          <input type="text" id="image" ref={enteredImage} />
        </div>
        <Button type="submit">Add route</Button>
      </form>
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
