import { Fragment } from "react";
import { Circles } from "tabler-icons-react";

import { Box, List } from "@mantine/core";

export default function AdminRouteList(props) {
  const gymWall = props.items;
  return (
    <>
      <Box sx={{ maxWidth: 500 }} mx="auto" style={{ marginBottom: 40 }}>
        <h2>Current routes on {gymWall.name}</h2>
        {gymWall.routes.length > 0 && (
          <Fragment>
            <List size={20} center>
              {gymWall.routes.map((route) => (
                <List.Item
                  key={route.id}
                  icon={
                    <Circles
                      size={24}
                      strokeWidth={2}
                      color={`${route.color}`}
                    />
                  }
                >
                  {route.color} {route.grade} : {route.name}
                </List.Item>
              ))}
            </List>
          </Fragment>
        )}
      </Box>
    </>
  );
}
