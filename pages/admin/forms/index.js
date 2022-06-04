import { Box } from "@mantine/core";

import AdminGymForm from "../../../components/admin/forms/gym-form";

export default function GymFormPage() {
  return (
    <Box sx={{ maxWidth: 300 }} mx="auto" style={{ marginBottom: 40 }}>
      <AdminGymForm />
    </Box>
  );
}
