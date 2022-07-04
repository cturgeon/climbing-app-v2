import { Fragment } from "react";
import { useSession } from "next-auth/react";

import { Text, Group } from "@mantine/core";

import GymList from "../components/ui/gym/gym-list";
import LearnModal from "../components/about/learn-modal";

import { prisma } from "../prisma/db";

export default function Home(props) {
  const { gymData } = props;
  const { data: session, status } = useSession();

  return (
    <>
      <Group direction="column" position="center">
        {checkStatus(status) && <LearnModal />}
        <Text size="md" transform="capitalize">
          Click a gym to get logging!
        </Text>
      </Group>
      <GymList items={gymData} />
    </>
  );
}

export async function getStaticProps() {
  const gyms = await prisma.gym.findMany();
  return { props: { gymData: gyms } };
}

function checkStatus(status) {
  return status !== "authenticated" && status !== "loading";
}
