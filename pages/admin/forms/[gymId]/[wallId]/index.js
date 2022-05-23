import { ObjectId } from "mongodb";

import { connectToDatabase, getGymById } from "../../../../../helpers/db-util";
import AdminRouteForm from "../../../../../components/admin/forms/route-form";
import AdminRouteList from "../../../../../components/admin/ui/route-list";

export default function WallFormEditPage(props) {
  const wallId = props.wallId;
  const gym = props.gym;
  const gymWall = gym.walls[wallId];

  return (
    <>
      <AdminRouteList items={gymWall} />
      <AdminRouteForm items={{ gym, gymWall }} />
    </>
  );
}

export async function getServerSideProps(context) {
  const gymId = context.params.gymId;
  const wallId = context.params.wallId;
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
        wallId: wallId,
      },
    };
  } catch (error) {
    client.close();
    console.error(error);
    return;
  }
}
