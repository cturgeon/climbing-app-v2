import { Fragment } from "react";

import { Text, Group, Button, Grid } from "@mantine/core";

import GymList from "../components/ui/gym/gym-list";
import LearnModal from "../components/about/learn-modal";

import { prisma } from "../prisma/db";
import { useSession } from "next-auth/react";

export default function Home(props) {
  const { gymData } = props;
  const { data: session, status } = useSession();

  return (
    <Group direction="column" position="center">
      <Fragment>
        {checkStatus(status) && <LearnModal />}
        <Text size="md" transform="capitalize">
          Click a gym to get logging!
        </Text>
        <GymList items={gymData} />
      </Fragment>
    </Group>
  );
}

export async function getStaticProps() {
  const gyms = await prisma.gym.findMany();
  return { props: { gymData: gyms } };
}

function checkStatus(status) {
  return status !== "authenticated" && status !== "loading";
}
