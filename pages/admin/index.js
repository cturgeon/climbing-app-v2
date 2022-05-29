import { useSession } from "next-auth/react";
import { Fragment } from "react";

import { Box, Button, List } from "@mantine/core";

import AdminPageComponent from "../../components/admin/admin";
import { connectToDatabase, getAllGymData } from "../../helpers/db-util";

export default function AdminPage(props) {
  const { gymData } = props;

  const { data: session, status } = useSession();

  if (!session || session?.user !== "admin") {
    return <p>This content can only be accessed by Admin users</p>;
  }

  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
      <h1>Admin Page</h1>
      <Button component="a" href="/admin/forms" style={{ marginBottom: 20 }}>
        Add a Gym
      </Button>
      <List style={{ marginBottom: 40 }}>
        {gymData.map((gym) => (
          <Fragment key={gym._id}>
            <AdminPageComponent items={gym} />
          </Fragment>
        ))}
      </List>
    </Box>
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
    return {
      notFound: true,
    };
  }
}
