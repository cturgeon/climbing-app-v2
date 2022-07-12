import { useState, useEffect } from "react";

import { Chip, Chips } from "@mantine/core";

export default function SortSelector({ sortHandler }) {
  const [sortType, setSortType] = useState("leftToRight");

  useEffect(() => {
    sortHandler(sortType);
  }, [sortType]);

  return (
    <>
      <Chips
        position="center"
        defaultValue={"leftToRight"}
        onChange={setSortType}
      >
        <Chip value="leftToRight">Left to Right</Chip>
        <Chip value="highToLow">High to Low</Chip>
        <Chip value="lowToHigh">Low to High</Chip>
      </Chips>
    </>
  );
}
