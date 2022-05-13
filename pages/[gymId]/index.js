import { Fragment } from "react";

import { getAllGyms, getGymById } from "../../helpers/api-util";

import GymHeader from "../../components/ui/gym-header";
import WallList from "../../components/wall-list";

import { Group } from "@mantine/core";

export default function SpecificGym(props) {
  const gym = props.gym;
  if (!gym) {
    return <p>Loading....</p>;
  }

  return (
    <Group direction="column" position="center">
      <Fragment>
        <GymHeader
          key={gym.id}
          id={gym.id}
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
  const gymData = await getGymById(gymId);
  return {
    props: {
      gym: gymData,
    },
  };
}

export async function getStaticPaths() {
  const gymData = await getAllGyms();
  // make sure to return the id that matches the file path. Here for ex. is [gymId]
  const paths = gymData.map((gym) => ({ params: { gymId: gym.id } }));
  return {
    paths: paths,
    fallback: "blocking",
  };
}
