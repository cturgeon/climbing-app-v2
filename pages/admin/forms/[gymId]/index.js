import { ObjectId } from "mongodb";
import dynamic from "next/dynamic";

import { connectToDatabase, getGymById } from "../../../../helpers/db-util";
const AdminWallList = dynamic(() =>
  import("../../../../components/admin/ui/wall-list")
);
const AdminWallForm = dynamic(() =>
  import("../../../../components/admin/forms/wall-form")
);

export default function WallForm(props) {
  const gym = props.gym;
  if (!gym) {
    return <p>Loading....</p>;
  }

  return (
    <>
      <AdminWallForm items={gym} />
      {gym.walls.length > 0 && <AdminWallList items={gym} />}
    </>
  );
}

export async function getServerSideProps(context) {
  const gymId = context.params.gymId;
  let client;
  try {
    client = await connectToDatabase();
    const gymData = await getGymById(client, "gym-data", {
      _id: ObjectId(gymId),
    });
    client.close();
    return {
      props: {
        gym: JSON.parse(JSON.stringify(gymData)),
      },
    };
  } catch (error) {
    client.close();
    console.error(error);
    return;
  }
}
