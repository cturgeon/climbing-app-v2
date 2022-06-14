import { useState } from "react";

import { Modal, Image } from "@mantine/core";

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
        <Image src={image} alt={id} onClick={() => setOpened(false)} />
      </Modal>
      <Image src={image} alt={id} onClick={() => setOpened(true)} />
    </>
  );
}
