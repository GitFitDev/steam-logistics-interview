import { Notification, rem } from "@mantine/core";
import { IconInfoCircle, IconAlertTriangle } from "@tabler/icons-react";
import { ReactElement } from "react";

type AlertProps = {
  color?: string;
  isError?: boolean;
  title?: ReactElement | string;
  closeButton?: boolean;
  children?: React.ReactNode;
};

const AlertNotification: React.FC<AlertProps> = ({
  children,
  color,
  isError,
  closeButton,
  title,
}) => {
  const alertIcon = isError ? <IconAlertTriangle style={{ width: rem(20), height: rem(20) }}/> : <IconInfoCircle style={{ width: rem(20), height: rem(20) }}/>;
  return (
    <Notification
      color={color}
      title={title}
      icon={alertIcon}
      variant="filled"
      style={{ alignItems: "baseline" }}
    >
      {children}
    </Notification>
  );
};

export { AlertNotification };
export default AlertNotification;
