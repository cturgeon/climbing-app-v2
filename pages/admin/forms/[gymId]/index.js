import { ObjectId } from "mongodb";

import { connectToDatabase, getGymById } from "../../../../helpers/db-util";
import AdminWallForm from "../../../../components/admin/forms/wall-form";
import AdminWallList from "../../../../components/admin/ui/wall-list";

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
