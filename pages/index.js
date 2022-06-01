import { Fragment } from "react";

import { Text, Group } from "@mantine/core";

import { connectToDatabase, getAllGymData } from "../helpers/db-util";
import GymList from "../components/ui/gym/gym-list";

export default function Home(props) {
  const { gymData } = props;
  return (
    <Group direction="column" position="center">
      <Fragment>
        <Text size="md" transform="capitalize">
          You can begin by selecting a gym below
        </Text>
        <GymList items={gymData} />
      </Fragment>
    </Group>
  );
}

// pre-render since there aren't many gyms to show and they don't change very often
export async function getStaticProps() {
  let client;
  try {
    client = await connectToDatabase();
    const gymData = await getAllGymData(client, "gym-data", { _id: -1 });
    return {
      props: {
        gymData: JSON.parse(JSON.stringify(gymData)),
      },
    };
  } catch (error) {
    console.error(error);
    return;
  }
}
