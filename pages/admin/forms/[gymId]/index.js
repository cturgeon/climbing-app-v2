import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
const AdminWallList = dynamic(() =>
  import("../../../../components/admin/ui/wall-list")
);
const AdminWallForm = dynamic(() =>
  import("../../../../components/admin/forms/wall-form")
);

import { prisma } from "../../../../prisma/db";

export default function WallForm(props) {
  const [walls, setWalls] = useState([]);
  const { gym } = props;
  if (!gym) {
    return <p>Loading....</p>;
  }

  useEffect(() => {
    fetch(`/api/gyms/${gym.id}`)
      .then((res) => res.json())
      .then((data) => setWalls(data.walls));
  }, []);

  return (
    <>
      <AdminWallForm items={gym} />
      {walls.length > 0 && <AdminWallList items={walls} />}
    </>
  );
}

export async function getServerSideProps(context) {
  const gymId = context.params.gymId;
  const gym = await prisma.gym.findUnique({ where: { id: gymId } });
  return { props: { gym } };
}
