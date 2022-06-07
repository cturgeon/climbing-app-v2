import { Grid } from "@mantine/core";

import ClimbItem from "./climb-item";
import ClimbCard from "./climb-card";

// props from [wallId]
export default function ClimbList(props) {
  const { routes, wall } = props.items;

  return (
    <ul style={{ padding: 0 }}>
      <Grid justify="center" spacing="md">
        {routes.map((route) => (
          <ClimbItem key={route.id}>
            <ClimbCard items={{ route, wall }} />
          </ClimbItem>
        ))}
      </Grid>
    </ul>
  );
}
