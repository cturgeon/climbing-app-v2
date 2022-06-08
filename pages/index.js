import { Fragment } from "react";

import { Text, Group } from "@mantine/core";

import GymList from "../components/ui/gym/gym-list";
import { PrismaClient } from "@prisma/client";

// import { prisma } from "../prisma/db";

export default function Home(props) {
  const { gymData } = props;
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

export async function getStaticProps() {
  try {
    const prisma = new PrismaClient();
    const gyms = await prisma.gym.findMany();
    return { props: { gymData: gyms } };
  } catch (error) {
    return { props: { hasError: error } };
  }
}
