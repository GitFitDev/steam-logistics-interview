"use client";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, List } from "@mantine/core";

export type ErrorModalProps = {
  title: string;
  message: string[];
  numberOfErrors: number;
};

const ErrorModal: React.FC<ErrorModalProps> = ({ title, message, numberOfErrors }) => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      {opened && (
        <Modal
          opened={opened}
          onClose={close}
          title={title}
          overlayProps={{
            backgroundOpacity: 0.55,
            blur: 3,
          }}
        >
          <List listStyleType="disc">
            {message.map((msg, index) => (
              <List.Item key={index}>
                {msg}
              </List.Item>
            ))}
          </List>
        </Modal>
      )}
      <Button variant="transparent" color="red" onClick={open} style={{ paddingBottom: 15}}>Error Count: {numberOfErrors}</Button>
    </>
  );
};

export { ErrorModal };
export default ErrorModal;
