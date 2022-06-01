import { Image, Stack, Text, Divider } from "@mantine/core";

export default function GymHeader(props) {
  const { id, name, image, description, address } = props;
  return (
    <>
      <div style={{ marginLeft: "auto", marginRight: "auto" }}>
        <Stack align="center">
          <Image alt={id} radius="md" src={image} />
          <Text>{name}</Text>
          <Text>{address}</Text>
          <Text>{description}</Text>
          <Divider my="sm" />
        </Stack>
      </div>
    </>
  );
}
