import { Grid } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";

import ClimbItem from "./climb-item";
import ClimbCard from "./climb-card";
import ClimbCardMobile from "./climb-card-mobile";

// props from [wallId]
export default function ClimbList(props) {
  const { routes, wall } = props.items;

  const { width } = useViewportSize();

  return (
    <ul style={{ padding: 0 }}>
      <Grid justify="center" spacing="md">
        {routes.map((route) => (
          <ClimbItem key={route.id}>
            {width > 1200 ? (
              <>
                <ClimbCard items={{ route, wall }} />
              </>
            ) : (
              <>
                <ClimbCardMobile items={{ route, wall }} />
              </>
            )}
          </ClimbItem>
        ))}
      </Grid>
    </ul>
  );
}
