import { Fragment } from "react";
import { useSession } from "next-auth/react";

import { Box, Button, List } from "@mantine/core";

import AdminPageComponent from "../../components/admin/admin";

import { prisma } from "../../prisma/db";

export default function AdminPage(props) {
  const { gyms } = props;

  const { data: session } = useSession();

  if (!session || session.user?.email !== "casey.turgeon@gmail.com") {
    return <p>This content can only be accessed by Admin users</p>;
  }

  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
      <h1>Admin Page</h1>
      <Button component="a" href="/admin/forms" style={{ marginBottom: 20 }}>
        Add a Gym
      </Button>
      <List style={{ marginBottom: 40 }}>
        {gyms?.map((gym) => (
          <Fragment key={gym._id}>
            <AdminPageComponent items={gym} />
          </Fragment>
        ))}
      </List>
    </Box>
  );
}

export async function getServerSideProps() {
  const gyms = await prisma.gym.findMany();
  return { props: { gyms } };
}
