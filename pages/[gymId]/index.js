import { Fragment } from "react";

import {
  connectToDatabase,
  getGymIds,
  getGymById,
} from "../../helpers/db-util";

import GymHeader from "../../components/ui/gym-header";
import WallList from "../../components/wall-list";

import { Group } from "@mantine/core";
import { ObjectId } from "mongodb";

export default function SpecificGym(props) {
  const gym = props.gym;
  if (!gym) {
    return <p>Loading....</p>;
  }

  return (
    <Group direction="column" position="center">
      <Fragment>
        <GymHeader
          key={gym._id}
          id={gym._id}
          name={gym.name}
          description={gym.description}
          image={gym.image}
          address={gym.address}
        />
        <WallList items={gym.walls} />
      </Fragment>
    </Group>
  );
}

export async function getStaticProps(context) {
  const gymId = context.params.gymId;
  let client;
  try {
    client = await connectToDatabase();
    const gymData = await getGymById(client, "gym-data", {
      _id: ObjectId(gymId),
    });
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

export async function getStaticPaths() {
  let client;
  try {
    client = await connectToDatabase();
    const gymData = await getGymIds(client, "gym-data");
    const gymIds = JSON.parse(JSON.stringify(gymData));
    const paths = gymIds.map((gymId) => ({ params: { gymId: gymId } }));
    client.close();
    return {
      paths: paths,
      fallback: "blocking",
    };
  } catch (error) {
    client.close();
    console.error(error);
    return;
  }
}
