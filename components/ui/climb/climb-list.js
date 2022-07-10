import { useState, useEffect } from "react";

import { Grid } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";

import ClimbItem from "./climb-item";
import ClimbCard from "./climb-card";
import ClimbCardMobile from "./climb-card-mobile";
import SortSelector from "./climb-list/sort-selector";

// props from [wallId]
export default function ClimbList(props) {
  const { routes, wall } = props.items;
  const { width } = useViewportSize();

  const [routesData, setRoutesData] = useState(routes);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    setRoutesData(routesData);
  }, [update]);

  const sortHandler = () => {
    // TODO left to right, high to low, low to high
    const sortedRouteData = routes.sort((a, b) => {
      return update ? a.grade - b.grade : b.grade - a.grade;
    });
    setUpdate((prevState) => !prevState);
  };

  return (
    <>
      <SortSelector sortHandler={sortHandler} />
      <ul style={{ padding: 0 }}>
        <Grid justify="center" spacing="md">
          {routesData.map((route) => (
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
    </>
  );
}
