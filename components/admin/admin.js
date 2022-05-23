import { Box, Button, Group, List, Grid } from "@mantine/core";

export default function AdminPageComponent(props) {
  const { items } = props;
  return (
    <Box sx={{ maxWidth: 300 }}>
      <Grid cols={2} justify="space-between" align="center">
        <h3>{`${items.name}`}</h3>
        <Button component="a" href={`/admin/forms/${items._id}`}>
          Edit walls
        </Button>
      </Grid>
    </Box>
  );
}
