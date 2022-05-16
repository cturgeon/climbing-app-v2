import { Button } from "@mantine/core";

export default function AdminPageComponent(props) {
  const { items } = props;
  return (
    <div>
      <h3>{`Edit ${items.name}`}</h3>
      <p>Edit a wall below or add a wall</p>
      <ul>
        {items.wall &&
          items.wall.map((wall) => {
            <li>{wall}</li>;
          })}
      </ul>
      <Button component="a" href={`/admin/forms/${items._id}`}>
        Add a wall
      </Button>
    </div>
  );
}
