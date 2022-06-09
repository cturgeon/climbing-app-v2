import { Title } from "@mantine/core";

import dynamic from "next/dynamic";
const ClimbList = dynamic(() =>
  import("../../../components/ui/climb/climb-list")
);

import { prisma } from "../../../prisma/db";

export default function SpecificWall(props) {
  const { wall, routes } = props.items;

  if (wall) {
    return (
      <div style={{ padding: 0 }}>
        <Title order={1} align="center">
          {wall.name}
        </Title>
        <ClimbList items={{ routes, wall }} />
      </div>
    );
  }

  return <div>This wall does not exist please try another</div>;
}

export async function getStaticProps(context) {
  const wallId = context.params.wallId;
  const wall = await prisma.wall.findUnique({ where: { id: wallId } });
  const routes = await prisma.route?.findMany({ where: { wallId: wallId } });
  const items = { wall, routes };
  return { props: { items } };
}

export async function getStaticPaths() {
  const wallIds = await prisma.wall?.findMany({
    select: { id: true, gymId: true },
  });
  const paths = wallIds.map((wallId) => ({
    params: { gymId: wallId.gymId, wallId: wallId.id },
  }));
  return {
    paths,
    fallback: "blocking",
  };
}

// export async function getServerSideProps(context) {
//   const wallId = context.params.wallId;
//   const wall = await prisma.wall.findUnique({ where: { id: wallId } });
//   const routes = await prisma.route?.findMany({ where: { wallId: wallId } });
//   const items = { wall, routes };
//   return { props: { items } };
// }
