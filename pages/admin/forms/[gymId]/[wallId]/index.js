import { ObjectId } from "mongodb";
import { connectToDatabase, getGymById } from "../../../../../helpers/db-util";
import { useRef } from "react";
import { Button } from "@mantine/core";

export default function WallFormEditPage(props) {
  const wallId = props.wallId;
  const gym = props.gym;
  const gymWall = gym.walls[wallId];

  console.log(gym);

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
    console.log(gym);
  }

  return (
    <div>
      <h1>Edit {gymWall.name}</h1>
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
