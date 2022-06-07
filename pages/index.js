import { Fragment } from "react";

import { Text, Group } from "@mantine/core";

import GymList from "../components/ui/gym/gym-list";

import { prisma } from "../prisma/db";
export default function Home(props) {
  const { gymData } = props;
  console.log(gymData);
  return (
    <Group direction="column" position="center">
      <Fragment>
        <Text size="md" transform="capitalize">
          Click a gym to get logging!
        </Text>
        <GymList items={gymData} />
      </Fragment>
    </Group>
  );
}

// pre-render since there aren't many gyms to show and they don't change very often
export async function getStaticProps() {
  try {
    const gyms = await prisma.gym.findMany();
    return { props: { gymData: gyms } };
  } catch (error) {
    return { props: { hasError: error } };
  }
}
