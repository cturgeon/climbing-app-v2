import { Box } from "@mantine/core";
import WallItem from "./wall-item";

export default function WallList(props) {
  const wallsData = props.items;
  const walls = [];
  for (let key in wallsData) {
    walls.push({
      id: key,
      ...wallsData[key],
    });
  }
  if (!walls) {
    return <p>loading... </p>;
  }
  return (
    <ul style={{ padding: 0 }}>
      {walls.map((wall) => (
        <WallItem
          key={wall.id}
          id={wall.id}
          image={wall.image}
          name={wall.name}
        />
      ))}
    </ul>
  );
}
