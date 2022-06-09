import { useEffect, useState } from "react";

import { Box, Footer, Select } from "@mantine/core";

// props from [gymId]
export default function WallFooter(props) {
  const { id, name } = props.items;
  const [wallValue, setWallValue] = useState();
  const [walls, setWalls] = useState([]);

  useEffect(() => {
    fetch(`/api/gyms/${id}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <Footer height={60}>
      <Box sx={{ maxWidth: 700 }} mx="auto">
        <Select
          align="center"
          value={wallValue}
          onChange={setWallValue}
          data={[{ value: "hi", label: "low" }]}
        />
      </Box>
    </Footer>
  );
}
