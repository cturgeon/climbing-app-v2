import { Fragment } from "react";
import { Wall } from "tabler-icons-react";

import { Button, List, Box } from "@mantine/core";

export default function AdminWallList(props) {
  const gym = props.items;
  return (
    <Box sx={{ maxWidth: 500 }} mx="auto">
      <Fragment>
        <h3>Edit a wall below</h3>
        <List spacing={5} style={{ listStyle: "none" }}>
          {gym.walls.map((wall) => (
            <List.Item key={wall.id}>
              <Button
                leftIcon={<Wall size={24} strokeWidth={1} color={"black"} />}
                variant="light"
                component="a"
                href={`/admin/forms/${gym._id}/${wall.id}`}
              >
                {`${wall.name}`}
              </Button>
            </List.Item>
          ))}
        </List>
      </Fragment>
    </Box>
  );
}
