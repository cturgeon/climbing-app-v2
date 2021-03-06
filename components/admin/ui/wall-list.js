import { Fragment } from "react";
import { Wall } from "tabler-icons-react";

import { Button, List, Box } from "@mantine/core";

export default function AdminWallList(props) {
  const walls = props.items;
  return (
    <Box sx={{ maxWidth: 500 }} mx="auto">
      <Fragment>
        <h3>Edit a wall below</h3>
        <List spacing={5} style={{ listStyle: "none" }}>
          {walls.map((wall) => (
            <List.Item key={wall.id}>
              <Button
                leftIcon={<Wall size={24} strokeWidth={1} color={"black"} />}
                variant="light"
                component="a"
                href={`/admin/forms/${wall.gymId}/${wall.id}`}
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
