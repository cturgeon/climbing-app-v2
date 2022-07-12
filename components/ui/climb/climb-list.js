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

  const [routesData, setRoutesData] = useState([...routes]);
  const [update, setUpdate] = useState(false);

  useEffect(() => {}, [update]);

  const sortHandler = (sortType) => {
    if (!sortType) return;
    let sortedRouteData;
    if (sortType === "leftToRight") {
      sortedRouteData = [...routes];
    } else if (sortType === "highToLow") {
      sortedRouteData = routesData.sort((a, b) => {
        return b.grade - a.grade;
      });
    } else if (sortType === "lowToHigh") {
      sortedRouteData = routesData.sort((a, b) => {
        return a.grade - b.grade;
      });
    }
    setRoutesData(sortedRouteData);

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
