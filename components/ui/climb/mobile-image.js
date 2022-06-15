import { useState } from "react";

import { Box, Modal } from "@mantine/core";
import Image from "next/image";

export default function MobileImageModal(props) {
  const [opened, setOpened] = useState(false);
  const { image, id } = props.items;

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        padding="0"
        withCloseButton={false}
      >
        <Box style={{ position: "relative" }}>
          <Image
            layout="responsive"
            height={"100%"}
            width={"100%"}
            src={image}
            alt={id}
            onClick={() => setOpened(false)}
          />
        </Box>
      </Modal>
      <Image
        layout="responsive"
        height={"100%"}
        width={"100%"}
        src={image}
        alt={id}
        onClick={() => setOpened(true)}
      />
    </>
  );
}
