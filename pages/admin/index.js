import { Fragment } from "react";
import AdminPageComponent from "../../components/admin/admin";
import { connectToDatabase, getAllGymData } from "../../helpers/db-util";
import { Button } from "@mantine/core";

export default function AdminPage(props) {
  const { gymData } = props;

  return (
    <div>
      <h1>Admin Page</h1>
      <Button component="a" href="/admin/forms">
        Add a Gym
      </Button>
      <ul>
        {gymData.map((gym) => (
          <Fragment key={gym._id}>
            <AdminPageComponent items={gym} />
          </Fragment>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  let client;
  try {
    client = await connectToDatabase();
    const gymData = await getAllGymData(client, "gym-data", { _id: -1 });
    return {
      props: {
        gymData: JSON.parse(JSON.stringify(gymData)),
      },
    };
  } catch (error) {
    console.error(error);
    return;
  }
}
