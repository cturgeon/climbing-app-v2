import { Stack, Text, Divider } from "@mantine/core";
import Image from "next/image";

export default function GymHeader(props) {
  const { id, name, image, description, address } = props.items;
  return (
    <>
      <div
        style={{
          position: "relative",
          width: "100%",
          paddingBottom: "50%",
        }}
      >
        <Image
          alt={id}
          radius="md"
          src={image}
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div style={{ marginLeft: "auto", marginRight: "auto" }}>
        <Stack align="center">
          <Text>{name}</Text>
          <Text>{address}</Text>
          <Text>{description}</Text>
          <Divider my="sm" />
        </Stack>
      </div>
    </>
  );
}
