import { ObjectId } from "mongodb";

import dynamic from "next/dynamic";
const ClimbList = dynamic(() =>
  import("../../../components/ui/climb/climb-list")
);

import { Title } from "@mantine/core";

import { connectToDatabase, getGymById } from "../../../helpers/db-util";

export default function SpecificWall(props) {
  const { wall } = props;

  if (wall) {
    return (
      <div style={{ padding: 0 }}>
        <Title order={1} align="center">
          {wall.name}
        </Title>
        <ClimbList items={wall.routes} wall={wall} />
      </div>
    );
  }

  return <div>This wall does not exist please try another</div>;
}

// we don't care to pre-render these walls, the data is not that important
// however this data never really changes. Would be nice to pre-render to feel a bit snappier
export async function getServerSideProps(context) {
  const gymId = context.params.gymId;
  const wallId = context.params.wallId;
  let client;
  client = await connectToDatabase();
  const gym = await getGymById(client, "gym-data", {
    _id: ObjectId(gymId),
  });
  const wall = gym.walls[wallId];
  if (!wall) {
    return {
      props: { hasError: true },
    };
  }
  return {
    props: {
      wall: wall,
      revalidate: 60,
    },
  };
}
