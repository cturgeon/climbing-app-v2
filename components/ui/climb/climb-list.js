import { Grid } from "@mantine/core";

import ClimbItem from "./climb-item";
import ClimbCard from "./climb-card";

// props from [wallId]
export default function ClimbList(props) {
  const climbingRoutes = props.items;
  const wall = props.wall;

  const climbs = [];
  for (let key in climbingRoutes) {
    climbs.push({
      id: key,
      ...climbingRoutes[key],
    });
  }

  if (!climbs) {
    <p>Loading routes...</p>;
  }

  return (
    <ul style={{ padding: 0 }}>
      <Grid justify="center" spacing="md">
        {climbs.map((route) => (
          <ClimbItem key={route.id}>
            <ClimbCard
              id={route.id}
              image={route.image}
              name={route.name}
              grade={route.grade}
              description={route.description}
              color={route.color}
              wall={wall}
            />
          </ClimbItem>
        ))}
      </Grid>
    </ul>
  );
}
