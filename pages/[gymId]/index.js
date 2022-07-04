import { Fragment } from "react";

import { Group } from "@mantine/core";

import GymHeader from "../../components/ui/gym/gym-header";
import WallList from "../../components/ui/wall/wall-list";

import { prisma } from "../../prisma/db";

export default function SpecificGym(props) {
  const { gym, walls } = props.items;
  if (!gym) {
    return <p>Loading....</p>;
  }

  return (
    <>
      <Fragment>
        <GymHeader items={gym} />
        {walls.length !== 0 ? (
          <WallList items={walls} />
        ) : (
          <h3>Walls coming soon!</h3>
        )}
      </Fragment>
    </>
  );
}

export async function getStaticProps(context) {
  const gymId = context.params.gymId;
  const gym = await prisma.gym.findUnique({ where: { id: gymId } });
  const walls = await prisma.wall.findMany({ where: { gymId: gymId } });
  const items = { gym, walls };
  return { props: { items } };
}

export async function getStaticPaths() {
  // const gymIds = await prisma.gym.findMany({ select: { id: true } });
  // const paths = gymIds.map((gymId) => ({ params: { gymId: gymId.id } }));
  return {
    paths: [],
    fallback: "blocking",
  };
}
