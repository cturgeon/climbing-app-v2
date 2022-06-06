import dynamic from "next/dynamic";
const AdminWallList = dynamic(() =>
  import("../../../../components/admin/ui/wall-list")
);
const AdminWallForm = dynamic(() =>
  import("../../../../components/admin/forms/wall-form")
);

import { prisma } from "../../../../prisma/db";

export default function WallForm(props) {
  const { gym } = props;
  if (!gym) {
    return <p>Loading....</p>;
  }

  return (
    <>
      <AdminWallForm items={gym} />
      {gym.walls?.length > 0 && <AdminWallList items={gym} />}
    </>
  );
}

export async function getServerSideProps(context) {
  const gymId = context.params.gymId;
  try {
    const gym = await prisma.gym.findUnique({ where: { id: gymId } });
    return { props: { gym } };
  } catch (error) {
    return new Error({ message: "could not find gym" });
  }
}
