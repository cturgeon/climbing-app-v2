import { connectToDatabase, getGymById } from "../../../helpers/db-util";
import ClimbList from "../../../components/climb-list";
import { Title } from "@mantine/core";
import { ObjectId } from "mongodb";

export default function SpecificWall(props) {
  const { wall } = props;

  if (wall) {
    return (
      <div style={{ padding: 0 }}>
        <Title order={1} align="center">
          {wall.name}
        </Title>
        <ClimbList items={wall.climbs} />
      </div>
    );
  }

  return <div>This wall does not exist please try another</div>;
}

// we don't care to pre-render these walls, the data is not that important
// however this data never really changes. Would be nice to pre-render to feel a bit snappier
export async function getServerSideProps(context) {
  let client;
  client = await connectToDatabase();
  const gym = await getGymById(client, "gym-data", {
    _id: ObjectId(context.params.wallId),
  });
  const wallsData = gym.walls;
  const walls = [];
  for (let key in wallsData) {
    walls.push({
      id: key,
      ...wallsData[key],
    });
  }
  const wallId = context.params.wallId;
  const wall = walls.find((wall) => wall.id === wallId);
  if (!wall) {
    return {
      props: { hasError: true },
    };
  }
  return {
    props: {
      wall: wall,
    },
  };
}
